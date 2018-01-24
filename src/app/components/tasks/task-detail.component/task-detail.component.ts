import { Component, Input } from '@angular/core';
import { UpdateTaskAction } from 'app/actions/tasks/UpdateTask.action';
import { Task } from 'app/models/task.model';

@Component({
  selector: 'task-detail-component',
  templateUrl: 'task-detail.component.html',
  styleUrls: ['task-detail.component.scss']
})
export class TaskDetailComponent { 
  constructor(private updateTask: UpdateTaskAction) {
  }

  @Input()
  task: Task;

  update() {
    this.updateTask.execute(this.task);
  }
}