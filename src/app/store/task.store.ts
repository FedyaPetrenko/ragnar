import { Injectable } from '@angular/core';
import { Task, TaskStatus } from 'app/service/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TaskStore {
  allTasks = new Array<Task>();
  filter: TaskStatus = TaskStatus.all;
  
  tasks$ = new BehaviorSubject<Array<Task>>([]);
  count$ = new BehaviorSubject<number>(0);
  avgLength$ = new BehaviorSubject<number>(0);
  firstAlpha$ = new BehaviorSubject<string>('');
  totalComplete$ = new BehaviorSubject<number>(0);
  totalNotStarted$ = new BehaviorSubject<number>(0);
}
