import { Component } from '@angular/core';
import { UpdateFilterAction } from 'app/actions/tasks/UpdateFilter.action';
import { TaskStatus } from 'app/models/task.model';

@Component({
  selector: 'task-filter-component',
  templateUrl: 'task-filter.component.html'
})
export class TaskFilterComponent {
  constructor(private updateFilterAction: UpdateFilterAction) {
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
}