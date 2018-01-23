import { Component } from '@angular/core';
import { TaskService } from 'app/service/task.service';

@Component({
  selector: 'task-input-component',
  templateUrl: 'task-input.component.html',
  styleUrls: ['task-input.component.scss']
})
export class TaskInputComponent { 
  inputText: string = '';

  constructor(private taskService: TaskService) {
  }

  addTask() {
    if (this.inputText.length > 0) {
      this.taskService.addTask(this.inputText);
      this.inputText = '';
    }
  }
}