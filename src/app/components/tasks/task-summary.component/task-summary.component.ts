import { Component } from '@angular/core';
import { TaskService } from 'app/service/task.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'task-summary-component',
  templateUrl: 'task-summary.component.html',
  styleUrls: ['task-summary.component.scss']
})
export class TaskSummaryComponent {
  count$: Observable<number>;
  avgLength$: Observable<number>;
  firstAlpha$: Observable<string>;
  totalComplete$: Observable<number>;
  totalNotStarted$: Observable<number>;

  constructor(taskService: TaskService) {
    this.count$ = taskService.count$;
    this.avgLength$ = taskService.avgLength$;
    this.firstAlpha$ = taskService.firstAlpha$;
    this.totalComplete$ = taskService.totalComplete$;
    this.totalNotStarted$ = taskService.totalNotStarted$;
  }
}