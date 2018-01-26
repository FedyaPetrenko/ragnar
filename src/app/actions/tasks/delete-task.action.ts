import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/IDataAction';
import { Task } from 'app/models/task.model';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

@Injectable()
export class DeleteTaskAction implements IDataAction<Task> {
  constructor(private store: Store, private tasksService: TasksService) {
  }
    
  execute(task: Task) {
    var index = this.store.taskStore.allTasks.findIndex(t => t.id === task.id);
    if (index !== undefined) {
      this.store.taskStore.allTasks.splice(index, 1);
      // Run Task Service Logic
      this.tasksService.UpdateTaskStoreValues();
    }
  }
}