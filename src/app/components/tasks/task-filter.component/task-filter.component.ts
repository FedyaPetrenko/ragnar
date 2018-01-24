import { Component } from '@angular/core';
import { ApplyTaskFilterAction } from 'app/actions/tasks/ApplyTaskFilter.action';
import { UpdateFilterAction } from 'app/actions/tasks/UpdateFilter.action';
import { TaskStatus } from 'app/service/task.model';

@Component({
  selector: 'task-filter-component',
  templateUrl: 'task-filter.component.html'
})
export class TaskFilterComponent {
  constructor(private applyTaskFilterAction: ApplyTaskFilterAction, private updateFilterAction: UpdateFilterAction) {
  }
  
  filterShowAll() {
    this.updateFilterAction.execute(TaskStatus.all);
    this.applyTaskFilterAction.execute();
  }

  filterCompleted() {
    this.updateFilterAction.execute(TaskStatus.completed);
    this.applyTaskFilterAction.execute();
  }

  filterNotStarted() {
    this.updateFilterAction.execute(TaskStatus.notstarted);
    this.applyTaskFilterAction.execute();
  }
}