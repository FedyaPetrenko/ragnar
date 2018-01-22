import { Component } from '@angular/core';
import { TaskService } from 'app/service/task.service';

@Component({
  selector: 'task-filter-component',
  templateUrl: 'task-filter.component.html'
})
export class TaskFilterComponent {
  constructor(private taskService: TaskService) {
  }
  
  filterShowAll() {
    this.taskService.setFilter('');
  }

  filterCompleted() {
    this.taskService.setFilter('completed');
  }

  filterNotStarted() {
    this.taskService.setFilter('notstarted');
  }
}