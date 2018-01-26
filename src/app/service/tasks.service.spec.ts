import { TaskStatus } from 'app/models/task-status.enum';
import { Task } from 'app/models/task.model';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';
import { TaskStore } from 'app/store/task.store';

describe('TasksService', () => {
  describe('UpdateTaskStoreValues', () => {
    it('updates all the task store values in task store', () => {
      const taskStore = new TaskStore();
      const store = new Store(taskStore);
      const tasksService = new TasksService(store);

      var task1 = new Task();
      task1.name = 'Task 1';
      task1.id = 0;
      store.taskStore.allTasks.push(task1);

      var task2 = new Task();
      task2.name = 'Task 2';
      task2.checked = true;
      task2.id = 1;
      store.taskStore.allTasks.push(task2);

      var task3 = new Task();
      task3.name = 'Task 1';
      task3.id = 2;
      store.taskStore.allTasks.push(task3);

      // Set filter to completed only for test
      store.taskStore.filter = TaskStatus.completed;

      tasksService.UpdateTaskStoreValues();

      expect(store.taskStore.avgLength$.getValue()).toBe(6);
      expect(store.taskStore.count$.getValue()).toBe(1);
      expect(store.taskStore.firstAlpha$.getValue()).toBe('Task 2');
      expect(store.taskStore.totalComplete$.getValue()).toBe(1);
      expect(store.taskStore.totalNotStarted$.getValue()).toBe(2);
      expect(store.taskStore.tasks$.getValue().length).toBe(1);
    });
  });
});