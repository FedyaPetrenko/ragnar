import { DeleteTaskAction } from 'app/actions/tasks/delete-task.action';
import { Task } from 'app/models/task.model';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';
import { TaskStore } from 'app/store/task.store';

describe('DeleteTaskAction', () => {
  describe('execute', () => {
    it('delete a task to task store', () => {
      const taskStore = new TaskStore();
      const store = new Store(taskStore);
      const tasksService = new TasksService(store);
      const test = new DeleteTaskAction(store, tasksService);

      var task = new Task();
      task.name = 'New Task';
      store.taskStore.allTasks.push(task);

      expect(store.taskStore.allTasks.length).toBe(1);

      test.execute(task);

      expect(store.taskStore.count$.getValue()).toBe(0);
    });
  });
});