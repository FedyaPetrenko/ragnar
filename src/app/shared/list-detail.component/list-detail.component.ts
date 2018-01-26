import { Component, Input } from '@angular/core';
import { Task } from 'app/models/task.model';
// import { DeleteTaskAction } from 'app/actions/tasks/DeleteTask.action';
// import { UpdateTaskAction } from 'app/actions/tasks/UpdateTask.action';

@Component({
  selector: 'list-detail-component',
  templateUrl: 'list-detail.component.html',
  styleUrls: ['list-detail.component.scss']
})
export class ListDetailComponent { 
  @Input()
  task: Task;
  
  constructor() {
  }
}