import { Component } from '@angular/core';
import { Task } from 'app/service/task.model';
import { TaskService } from 'app/service/task.service';

@Component({
  selector: 'task-input-component',
  templateUrl: 'task-input.component.html'
})
export class TaskInputComponent { 
  inputText: string = '';

  constructor(private taskService: TaskService) {
  }

  addTask() {
    if (this.inputText.length > 0) {
      var task = new Task();
      task.name = this.inputText;
      this.taskService.addTask(task);
      this.inputText = '';
    }
  }
}