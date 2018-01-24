import { Injectable } from '@angular/core';
import { TaskStore } from 'app/store/task.store';

@Injectable()
export class Store {
  constructor(public taskStore: TaskStore) {
  }
}