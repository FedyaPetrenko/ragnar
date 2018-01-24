import { Component } from '@angular/core';
import { Task } from 'app/models/task.model';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'task-list-component',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.scss']
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;
  
  constructor(private store: Store) {
    this.tasks$ = this.store.taskStore.tasks$;
  } 
}