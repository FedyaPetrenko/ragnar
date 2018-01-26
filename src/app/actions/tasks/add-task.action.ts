import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/IDataAction';
import { Task } from 'app/models/task.model';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

@Injectable()
export class AddTaskAction implements IDataAction<string> {
  constructor(private store: Store, private tasksService: TasksService) {
  }
    
  execute(taskName: string) {
    var task = new Task();
    task.name = taskName;
    task.id = this.store.taskStore.allTasks.length;
    this.store.taskStore.allTasks.push(task);
    // Run Task Service Logic
    this.tasksService.UpdateTaskStoreValues();
  }
}