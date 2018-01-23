import { Component } from '@angular/core';
import { TaskStatus } from 'app/service/task.model';
import { TaskService } from 'app/service/task.service';

@Component({
  selector: 'task-filter-component',
  templateUrl: 'task-filter.component.html'
})
export class TaskFilterComponent {
  constructor(private taskService: TaskService) {
  }
  
  filterShowAll() {
    this.taskService.setFilter(TaskStatus.all);
  }

  filterCompleted() {
    this.taskService.setFilter(TaskStatus.completed);
  }

  filterNotStarted() {
    this.taskService.setFilter(TaskStatus.notstarted);
  }
}