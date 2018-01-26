import { UpdateFilterAction } from 'app/actions/tasks/update-filter.action';
import { TaskStatus } from 'app/models/task-status.enum';
import { Task } from 'app/models/task.model';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';
import { TaskStore } from 'app/store/task.store';

describe('UpdateFilterAction', () => {
  describe('execute', () => {
    const taskStore = new TaskStore();
    const store = new Store(taskStore);
    const tasksService = new TasksService(store);
    const test = new UpdateFilterAction(store, tasksService);

    var task1 = new Task();
    task1.name = 'Task 1';
    store.taskStore.allTasks.push(task1);

    var task2 = new Task();
    task2.name = 'Task 2';
    task2.checked = true;
    store.taskStore.allTasks.push(task2);
    it('test filter option all on taskStore', () => {
      test.execute(TaskStatus.all);

      expect(store.taskStore.filter).toBe(TaskStatus.all);
      expect(store.taskStore.allTasks.length).toBe(2);
    });    
    it('test filter option completed on taskStore', () => {
      test.execute(TaskStatus.completed);

      expect(store.taskStore.filter).toBe(TaskStatus.completed);
      expect(store.taskStore.tasks$.getValue().length).toBe(1);
      expect(store.taskStore.tasks$.getValue()[0].name).toBe('Task 2');
    });
    it('test filter option not started on taskStore', () => {
      test.execute(TaskStatus.notstarted);

      expect(store.taskStore.filter).toBe(TaskStatus.notstarted);
      expect(store.taskStore.tasks$.getValue().length).toBe(1);
      expect(store.taskStore.tasks$.getValue()[0].name).toBe('Task 1');      
    });    
  });
});