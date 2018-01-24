import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/IDataAction';
import { TaskStatus } from 'app/service/task.model';
import { Store } from 'app/store/store';

@Injectable()
export class UpdateFilterAction implements IDataAction<TaskStatus> {
  constructor(private store: Store) {
  }
    
  execute(taskStatus: TaskStatus) {
    this.store.taskStore.filter = taskStatus;
    // Possibly Apply filter here
  }
}