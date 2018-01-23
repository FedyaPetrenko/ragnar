import { Injectable } from '@angular/core';
import { Task, TaskStatus } from 'app/service/task.model';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {
  private allTasks = new Array<Task>();
  filter: TaskStatus = TaskStatus.all;

  private tasks$ = new BehaviorSubject<Array<Task>>([]);
  private count$ = new BehaviorSubject<number>(0);
  private avgLength$ = new BehaviorSubject<number>(0);

  constructor() {
    this.getTasksObservable().subscribe(

      function(this: TaskService, e: Array<Task>) {
        // Update count observable
        this.count$.next(e.length);
        
        // Update the avgLength observable
        var avgLength = 0;
        if (e.length > 0) {
          var total = 0;
          for (let currentTask of e) {
            total += currentTask.name.length;
          }
          avgLength = total / e.length;
        }
        this.avgLength$.next(avgLength);
      }.bind(this));
  }

  getTasksObservable(): Observable<Array<Task>> {
    return this.tasks$.asObservable();
  }

  getCountObservable(): Observable<number> {
    return this.count$.asObservable();
  }

  getAvgLengthObservable(): Observable<number> {
    return this.avgLength$.asObservable();
  }

  addTask(task: Task) {
    this.allTasks.push(task);
    this.fireObservable(this.filter);
  }

  updateTask(task: Task) {
    var index = this.allTasks.findIndex(t => t.name === task.name);
    if (index !== undefined) {
       this.allTasks[index] = task;
       // Update the filter
       this.fireObservable(this.filter);
    }
  }

  setFilter(filterText: TaskStatus) {
    this.filter = filterText;
    this.fireObservable(this.filter);
  }

  private fireObservable(filter: TaskStatus) {
    if (filter === TaskStatus.completed) {
      var checkedTasks: Array<Task> = this.allTasks.filter(t => t.checked === true);
      this.tasks$.next(checkedTasks);
    } else if (filter === TaskStatus.notstarted) {
      var uncheckedTasks: Array<Task> = this.allTasks.filter(t => t.checked === false);
      this.tasks$.next(uncheckedTasks);
    } else {
      this.tasks$.next(this.allTasks);
    }
  }
}