import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/IDataAction';
import { Task } from 'app/service/task.model';
import { Store } from 'app/store/store';

@Injectable()
export class UpdateTaskAction implements IDataAction<Task> {
  constructor(private store: Store) {
  }
    
  execute(task: Task) {
    var index = this.store.taskStore.allTasks.findIndex(t => t.name === task.name);
    if (index !== undefined) {
      this.store.taskStore.allTasks[index] = task;
      // Possibly Apply filter here
    }
  }
}