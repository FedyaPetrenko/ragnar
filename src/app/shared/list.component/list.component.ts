import { Component } from '@angular/core';
import { Task } from 'app/models/task.model';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'list-component',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent {
  tasks$: Observable<Task[]>;
  
  constructor(private store: Store) {
    this.tasks$ = this.store.taskStore.tasks$;
  } 
}