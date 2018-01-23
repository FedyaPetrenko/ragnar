import { Component } from '@angular/core';
import { Task } from 'app/service/task.model';
import { TaskService } from 'app/service/task.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'task-list-component',
  templateUrl: 'task-list.component.html'
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;
  
  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasksObservable();
  } 
}