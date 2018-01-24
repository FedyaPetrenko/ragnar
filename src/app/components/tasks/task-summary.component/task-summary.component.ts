import { Component } from '@angular/core';
import { Store } from 'app/store/store';
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

  constructor(public store: Store) {
    this.count$ = this.store.taskStore.count$;
    this.avgLength$ = this.store.taskStore.avgLength$;
    this.firstAlpha$ = this.store.taskStore.firstAlpha$;
    this.totalComplete$ = this.store.taskStore.totalComplete$;
    this.totalNotStarted$ = this.store.taskStore.totalNotStarted$;
  }
}