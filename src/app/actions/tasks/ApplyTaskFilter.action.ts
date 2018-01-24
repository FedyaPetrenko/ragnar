import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/IAction';
import { Task, TaskStatus } from 'app/service/task.model';
import { Store } from 'app/store/store';

@Injectable()
export class ApplyTaskFilterAction implements IAction {
  constructor(private store: Store) {
  }
    
  execute() {
    if (this.store.taskStore.filter === TaskStatus.completed) {
      var checkedTasks: Array<Task> = this.store.taskStore.allTasks.filter(
        t => t.checked === true
      );
      this.store.taskStore.tasks$.next(checkedTasks);
    } else if (this.store.taskStore.filter === TaskStatus.notstarted) {
      var uncheckedTasks: Array<Task> = this.store.taskStore.allTasks.filter(
        t => t.checked === false
      );
      this.store.taskStore.tasks$.next(uncheckedTasks);
    } else {
      this.store.taskStore.tasks$.next(this.store.taskStore.allTasks);
    }
  }
}