import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/IDataAction';
import { TaskStatus } from 'app/models/task-status.enum';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

@Injectable()
export class UpdateFilterAction implements IDataAction<TaskStatus> {
  constructor(private store: Store, private tasksService: TasksService) {
  }
    
  execute(taskStatus: TaskStatus) {
    this.store.taskStore.filter = taskStatus;
    // Run Task Service Logic
    this.tasksService.UpdateTaskStoreValues();
  }
}