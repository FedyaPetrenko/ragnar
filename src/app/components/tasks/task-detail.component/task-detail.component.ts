import { Component, Input } from '@angular/core';
import { DeleteTaskAction } from 'app/actions/tasks/delete-task.action';
import { UpdateTaskAction } from 'app/actions/tasks/update-task.action';
import { Task } from 'app/models/task.model';

@Component({
  selector: 'task-detail-component',
  templateUrl: 'task-detail.component.html',
  styleUrls: ['task-detail.component.scss']
})
export class TaskDetailComponent { 
  constructor(private updateTask: UpdateTaskAction, private deleteTask: DeleteTaskAction) {
  }

  @Input()
  task: Task;

  update() {
    this.updateTask.execute(this.task);
  }

  delete() {
    this.deleteTask.execute(this.task);
  }
}