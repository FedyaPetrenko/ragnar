import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/IDataAction';
import { Task } from 'app/service/task.model';
import { Store } from 'app/store/store';

@Injectable()
export class CalculateSummaryFieldsAction implements IDataAction<Task[]> {
  constructor(private store: Store) {
  }
    
  execute(payload: Task[]) {
    // Update total count;  
    this.store.taskStore.count$.next(payload.length);

    var avgLength = 0;
    var firstAlpha = '';
    var totalComplete = 0;
    var totalNotStarted = 0;

    // Only update fields if their are items in the array
    if (payload.length > 0) {
      // Update the avgLength observable
      var total = 0;
      for (let currentTask of payload) {
        total += currentTask.name.length;
        if (currentTask.checked) {
          totalComplete += 1;
        } else {
          totalNotStarted += 1;
        }
      }
      avgLength = total / payload.length;
      // Update firstAlpha observable
      firstAlpha = payload.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
        return 0;
        }
      })[0].name;
    }
    this.store.taskStore.avgLength$.next(avgLength);
    this.store.taskStore.firstAlpha$.next(firstAlpha);
    this.store.taskStore.totalComplete$.next(totalComplete);
    this.store.taskStore.totalNotStarted$.next(totalNotStarted);
  }
}