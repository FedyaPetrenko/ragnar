import { Injectable } from '@angular/core';
import { Task } from 'app/service/task.model';

@Injectable()
export class TaskService {

  tasks = new Array<Task>();
  private allTasks = new Array<Task>();
  filter: string = '';

  addTask(task: Task) {
    this.allTasks.push(task);
    this.updateFilter(this.filter);
  }

  updateTask(task: Task) {
    var index = this.tasks.findIndex(t => t.name === task.name);
    if (index !== undefined) {
      this.tasks[index] = task;
      // Update the filter
      this.updateFilter(this.filter);
    }
  }

  setFilter(filterText: string) {
    this.filter = filterText;
    this.updateFilter(this.filter);
  }

  private updateFilter(filter: string) {
    if (filter === 'completed') {
      this.tasks.splice(0, this.tasks.length);
      var checkedTasks: Array<Task> = this.allTasks.filter(t => t.checked === true);
      for (let i = 0; i < checkedTasks.length; i++) {
        this.tasks.push(checkedTasks[i]);
      }
    } else if (filter === 'notstarted') {
      this.tasks.splice(0, this.tasks.length);
      var uncheckedTasks: Array<Task> = this.allTasks.filter(t => t.checked === false);
      for (let i = 0; i < uncheckedTasks.length; i++) {
        this.tasks.push(uncheckedTasks[i]);
      }
    } else {
      this.tasks.splice(0, this.tasks.length);
      for (let i = 0; i < this.allTasks.length; i++) {
        this.tasks.push(this.allTasks[i]);
      }
    }
  }
}