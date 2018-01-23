import { Component, Input } from '@angular/core';
import { Task } from 'app/service/task.model';
import { TaskService } from 'app/service/task.service';

@Component({
  selector: 'task-detail-component',
  templateUrl: 'task-detail.component.html',
  styleUrls: ['task-detail.component.scss']
})
export class TaskDetailComponent { 
  constructor(private taskService: TaskService) {
  }

  @Input()
  task: Task;

  update() {
    this.taskService.updateTask(this.task);
  }
}