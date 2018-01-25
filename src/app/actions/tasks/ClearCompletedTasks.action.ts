import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/IAction';
import { Task } from 'app/models/task.model';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

@Injectable()
export class ClearCompletedTasksAction implements IAction {
  constructor(private store: Store, private tasksService: TasksService) {
  }
    
  execute() {
    var checkedItems = this.store.taskStore.allTasks.filter(function(item: Task) {
      return item.checked === true;
    });
    if (checkedItems.length !== 0) {
      checkedItems.forEach((task: Task) => {
        var index = this.store.taskStore.allTasks.findIndex(t => t.id === task.id);
        if (index !== undefined) {
          this.store.taskStore.allTasks.splice(index, 1);
        }
      });
      // Run Task Service Logic
      this.tasksService.UpdateTaskStoreValues();
    }
  }
}