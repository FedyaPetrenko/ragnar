import { Injectable } from '@angular/core';
import { Task, TaskStatus } from 'app/service/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TaskService {
  private allTasks = new Array<Task>();
  filter: TaskStatus = TaskStatus.all;

  public tasks$ = new BehaviorSubject<Array<Task>>([]);
  public count$ = new BehaviorSubject<number>(0);
  public avgLength$ = new BehaviorSubject<number>(0);
  public firstAlpha$ = new BehaviorSubject<string>('');
  public totalComplete$ = new BehaviorSubject<number>(0);
  public totalNotStarted$ = new BehaviorSubject<number>(0);

  constructor() {
    this.tasks$.subscribe((e: Array<Task>) => {
      // Update count observable
      this.count$.next(e.length);

      var avgLength = 0;
      var firstAlpha = '';
      var totalComplete = 0;
      var totalNotStarted = 0;

      if (e.length > 0) {
        // Update the avgLength observable
        var total = 0;
        for (let currentTask of e) {
          total += currentTask.name.length;
          if (currentTask.checked) {
            totalComplete += 1;
          } else {
            totalNotStarted += 1;
          }
        }
        avgLength = total / e.length;
        // Update firstAlpha observable
        firstAlpha = e.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          } else {
          return 0;
          }
        })[0].name;
      }
      this.avgLength$.next(avgLength);
      this.firstAlpha$.next(firstAlpha);
      this.totalComplete$.next(totalComplete);
      this.totalNotStarted$.next(totalNotStarted);
    });
  }

  addTask(inputText: string) {
    var task = new Task();
    task.name = inputText;
    this.allTasks.push(task);
    this.fireObservable();
  }

  updateTask(task: Task) {
    var index = this.allTasks.findIndex(t => t.name === task.name);
    if (index !== undefined) {
      this.allTasks[index] = task;
      // Update the filter
      this.fireObservable();
    }
  }

  setFilter(filterText: TaskStatus) {
    this.filter = filterText;
    this.fireObservable();
  }

  private fireObservable() {
    if (this.filter === TaskStatus.completed) {
      var checkedTasks: Array<Task> = this.allTasks.filter(
        t => t.checked === true
      );
      this.tasks$.next(checkedTasks);
    } else if (this.filter === TaskStatus.notstarted) {
      var uncheckedTasks: Array<Task> = this.allTasks.filter(
        t => t.checked === false
      );
      this.tasks$.next(uncheckedTasks);
    } else {
      this.tasks$.next(this.allTasks);
    }
  }
}
