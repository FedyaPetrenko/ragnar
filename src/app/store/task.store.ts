import { Injectable } from '@angular/core';
import { TaskStatus } from 'app/models/task-status.enum';
import { Task } from 'app/models/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TaskStore {
  allTasks = new Array<Task>();
  filter: TaskStatus = TaskStatus.all;
  allChecked: boolean = false;

  tasks$ = new BehaviorSubject<Array<Task>>([]);
  count$ = new BehaviorSubject<number>(0);
  avgLength$ = new BehaviorSubject<number>(0);
  firstAlpha$ = new BehaviorSubject<string>('');
  totalComplete$ = new BehaviorSubject<number>(0);
  totalNotStarted$ = new BehaviorSubject<number>(0);
}
