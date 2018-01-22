import { Component } from '@angular/core';
import { Task } from 'app/service/task.model';
import { TaskService } from 'app/service/task.service';

@Component({
  selector: 'task-list-component',
  templateUrl: 'task-list.component.html'
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.tasks;
  } 

  tasks: Task[];
}
