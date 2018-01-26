import { Component } from '@angular/core';
import { ClearCompletedTasksAction } from 'app/actions/tasks/clear-completed-tasks.action';
import { UpdateFilterAction } from 'app/actions/tasks/update-filter.action';
import { TaskStatus } from 'app/models/task-status.enum';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'task-filter-component',
  templateUrl: 'task-filter.component.html'
})
export class TaskFilterComponent {
  tasksLeft$: Observable<number>;

  constructor(private updateFilterAction: UpdateFilterAction, private clearCompletedTaskAction: ClearCompletedTasksAction, private store: Store) {
    this.tasksLeft$ = this.store.taskStore.totalNotStarted$;
  }
  
  filterShowAll() {
    this.updateFilterAction.execute(TaskStatus.all);
  }

  filterCompleted() {
    this.updateFilterAction.execute(TaskStatus.completed);
  }

  filterNotStarted() {
    this.updateFilterAction.execute(TaskStatus.notstarted);
  }

  clearCompletedTasks() {
    this.clearCompletedTaskAction.execute();
  } 
}