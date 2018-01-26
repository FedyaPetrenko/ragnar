import { CompleteAllTasksAction } from 'app/actions/tasks/complete-all-tasks.action';
import { Task } from 'app/models/task.model';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';
import { TaskStore } from 'app/store/task.store';

describe('CompleteAllTasksAction', () => {
  describe('execute', () => {
    it('marks all tasks as completed', () => {
      const taskStore = new TaskStore();
      const store = new Store(taskStore);
      const tasksService = new TasksService(store);
      const test = new CompleteAllTasksAction(store, tasksService);

      var task1 = new Task();
      task1.name = 'Task 1';
      store.taskStore.allTasks.push(task1);

      var task2 = new Task();
      task2.name = 'Task 2';
      store.taskStore.allTasks.push(task2);

      var task3 = new Task();
      task3.name = 'Task 3';
      store.taskStore.allTasks.push(task3);

      expect(store.taskStore.allTasks.filter(
        function(task: Task) {
          return task.checked === false;
      }).length).toBe(3);

      test.execute();

      expect(store.taskStore.totalComplete$.getValue()).toBe(3);
      expect(store.taskStore.totalNotStarted$.getValue()).toBe(0);
    });
    it('marks all tasks as completed with one already completed', () => {
      const taskStore = new TaskStore();
      const store = new Store(taskStore);
      const tasksService = new TasksService(store);
      const test = new CompleteAllTasksAction(store, tasksService);

      var task1 = new Task();
      task1.name = 'Task 1';
      store.taskStore.allTasks.push(task1);

      var task2 = new Task();
      task2.name = 'Task 2';
      task2.checked = true;
      store.taskStore.allTasks.push(task2);

      var task3 = new Task();
      task3.name = 'Task 3';
      store.taskStore.allTasks.push(task3);

      expect(store.taskStore.allTasks.filter(
        function(task: Task) {
          return task.checked === false;
      }).length).toBe(2);
      expect(store.taskStore.allTasks.filter(
        function(task: Task) {
          return task.checked === true;
      }).length).toBe(1);

      test.execute();

      expect(store.taskStore.totalComplete$.getValue()).toBe(3);
      expect(store.taskStore.totalNotStarted$.getValue()).toBe(0);
    });
    it('marks all task as not completed because they are already marked as completed', () => {
      const taskStore = new TaskStore();
      const store = new Store(taskStore);
      const tasksService = new TasksService(store);
      const test = new CompleteAllTasksAction(store, tasksService);

      var task1 = new Task();
      task1.name = 'Task 1';
      task1.checked = true;
      store.taskStore.allTasks.push(task1);

      var task2 = new Task();
      task2.name = 'Task 2';
      task2.checked = true;
      store.taskStore.allTasks.push(task2);

      var task3 = new Task();
      task3.name = 'Task 3';
      task3.checked = true;
      store.taskStore.allTasks.push(task3);

      store.taskStore.allChecked = true;

      expect(store.taskStore.allTasks.filter(
        function(task: Task) {
          return task.checked === true;
      }).length).toBe(3);

      test.execute();

      expect(store.taskStore.totalComplete$.getValue()).toBe(0);
      expect(store.taskStore.totalNotStarted$.getValue()).toBe(3);
    });
  });
});