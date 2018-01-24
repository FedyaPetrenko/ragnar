import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/IDataAction';
import { Task } from 'app/service/task.model';
import { Store } from 'app/store/store';

@Injectable()
export class AddTaskAction implements IDataAction<string> {
  constructor(private store: Store) {
  }
    
  execute(taskName: string) {
    var task = new Task();
    task.name = taskName;
    this.store.taskStore.allTasks.push(task);
    // Possibly Apply filter here
  }
}