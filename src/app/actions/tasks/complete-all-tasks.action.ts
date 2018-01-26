import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/IAction';
import { Task } from 'app/models/task.model';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

@Injectable()
export class CompleteAllTasksAction implements IAction {
  constructor(private store: Store, private tasksService: TasksService) {
  }
    
  execute() {
    if (this.store.taskStore.allChecked) {
      this.store.taskStore.allTasks.forEach((item: Task) => {
        item.checked = false;
      });
    } else {
      this.store.taskStore.allTasks.forEach((item: Task) => {
        item.checked = true;
      });
    }
    // Run Task Service Logic
    this.tasksService.UpdateTaskStoreValues();
  }
}