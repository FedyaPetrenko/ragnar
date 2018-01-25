import { AddTaskAction } from 'app/actions/tasks/AddTask.action';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';
import { TaskStore } from 'app/store/task.store';

describe('AddTaskAction', () => {
  describe('execute', () => {
    it('adds a task to task store', () => {
      const taskStore = new TaskStore();
      const store = new Store(taskStore);
      const tasksService = new TasksService(store);
      const test = new AddTaskAction(store, tasksService);

      test.execute('Test Task');

      expect(store.taskStore.count$.getValue()).toBe(1);
      expect(store.taskStore.tasks$.getValue()[0].name).toBe('Test Task');
    });
  });
});