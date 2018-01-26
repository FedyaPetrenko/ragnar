import { ClearCompletedTasksAction } from 'app/actions/tasks/clear-completed-tasks.action';
import { Task } from 'app/models/task.model';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';
import { TaskStore } from 'app/store/task.store';

describe('ClearCompletedTasksAction', () => {
  describe('execute', () => {
    it('removes all tasks that are completed from taskStore', () => {
      const taskStore = new TaskStore();
      const store = new Store(taskStore);
      const tasksService = new TasksService(store);
      const test = new ClearCompletedTasksAction(store, tasksService);

      var task1 = new Task();
      task1.name = 'Task 1';
      task1.checked = true;
      store.taskStore.allTasks.push(task1);

      var task2 = new Task();
      task2.name = 'Task 2';
      store.taskStore.allTasks.push(task2);

      var task3 = new Task();
      task3.name = 'Task 3';
      task3.checked = true;
      store.taskStore.allTasks.push(task3);

      expect(store.taskStore.allTasks.length).toBe(3);

      test.execute();

      expect(store.taskStore.count$.getValue()).toBe(1);
    });
  });
});