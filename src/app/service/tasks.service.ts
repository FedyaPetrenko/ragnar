import { Injectable } from '@angular/core';
import { TaskSummaryDetails } from 'app/models/task-summary-details.model';
import { Task, TaskStatus } from 'app/models/task.model';
import { Store } from 'app/store/store';

@Injectable()
export class TasksService {
  constructor(private store: Store) {    
  }

  public UpdateTaskStoreValues() {
    this.ApplyTaskFilter();
    this.UpdateTaskSummaryFields();
  }

  private ApplyTaskFilter() {
    this.store.taskStore.tasks$.next(this.GetFilteredArray());
  }

  private UpdateTaskSummaryFields() {
    var payload = this.GetFilteredArray();
  
    // Get Summary Details
    var details = this.GetSummaryDetails(payload);
    this.store.taskStore.avgLength$.next(details.avgLength);
    this.store.taskStore.totalComplete$.next(details.totalComplete);
    this.store.taskStore.totalNotStarted$.next(details.totalNotStarted);
    
    // Get First alpha
    this.store.taskStore.firstAlpha$.next(this.GetFirstAlpha(payload));

    // Update total count;  
    this.store.taskStore.count$.next(payload.length);
  }

  private GetFilteredArray(): Array<Task> {
    if (this.store.taskStore.filter === TaskStatus.completed) {
      var checkedTasks: Array<Task> = this.store.taskStore.allTasks.filter(
        t => t.checked === true
      );
      return checkedTasks;
    } else if (this.store.taskStore.filter === TaskStatus.notstarted) {
      var uncheckedTasks: Array<Task> = this.store.taskStore.allTasks.filter(
        t => t.checked === false
      );
      return uncheckedTasks;
    } else {
      return this.store.taskStore.allTasks;
    }
  }

  private GetFirstAlpha(tasks: Array<Task>): string {
    var firstAlpha = '';
    
    if (tasks.length > 0) {
      // Update firstAlpha observable
      firstAlpha = tasks.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
        return 0;
        }
      })[0].name;
    }
    
    return firstAlpha;
  }

  private GetSummaryDetails(tasks: Array<Task>): TaskSummaryDetails {
    var details = new TaskSummaryDetails();

    // Only update fields if their are items in the array
    if (tasks.length > 0) {
      // Update the avgLength observable
      var total = 0;
      for (let currentTask of tasks) {
        total += currentTask.name.length;
        if (currentTask.checked) {
          details.totalComplete += 1;
        } else {
          details.totalNotStarted += 1;
        }
      }
      details.avgLength = total / tasks.length;
    }

    return details;
  }
}