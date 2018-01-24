import { Component, Input } from '@angular/core';
import { ApplyTaskFilterAction } from 'app/actions/tasks/ApplyTaskFilter.action';
import { UpdateTaskAction } from 'app/actions/tasks/UpdateTask.action';
import { Task } from 'app/service/task.model';

@Component({
  selector: 'task-detail-component',
  templateUrl: 'task-detail.component.html',
  styleUrls: ['task-detail.component.scss']
})
export class TaskDetailComponent { 
  constructor(private updateTask: UpdateTaskAction, private applyTaskFilterAction: ApplyTaskFilterAction) {
  }

  @Input()
  task: Task;

  update() {
    this.updateTask.execute(this.task);
    this.applyTaskFilterAction.execute();
  }
}