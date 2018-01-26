import { UpdateTaskAction } from 'app/actions/tasks/update-task.action';
import { Task } from 'app/models/task.model';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';
import { TaskStore } from 'app/store/task.store';

describe('UpdateTaskAction', () => {
  describe('execute', () => {
    it('updates a task in task store', () => {
      const taskStore = new TaskStore();
      const store = new Store(taskStore);
      const tasksService = new TasksService(store);
      const test = new UpdateTaskAction(store, tasksService);

      var task = new Task();
      task.name = 'Task 1';
      store.taskStore.allTasks.push(task);

      expect(store.taskStore.allTasks.length).toBe(1);

      task.checked = true;
      test.execute(task);

      expect(store.taskStore.totalNotStarted$.getValue()).toBe(0);
      expect(store.taskStore.totalComplete$.getValue()).toBe(1);
    });
  });
});