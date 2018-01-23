import { Component } from '@angular/core';
import { TaskService } from 'app/service/task.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'task-summary-component',
  templateUrl: 'task-summary.component.html'
})
export class TaskSummaryComponent {
  count$: Observable<number>;
  avgLength$: Observable<number>;

  constructor(taskService: TaskService) {
    this.count$ = taskService.getCountObservable();
    this.avgLength$ = taskService.getAvgLengthObservable();
  }
}