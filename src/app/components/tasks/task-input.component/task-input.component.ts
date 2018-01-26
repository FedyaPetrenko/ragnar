import { Component } from '@angular/core';
import { AddTaskAction } from 'app/actions/tasks/add-task.action';
import { CompleteAllTasksAction } from 'app/actions/tasks/complete-all-tasks.action';

@Component({
  selector: 'task-input-component',
  templateUrl: 'task-input.component.html',
  styleUrls: ['task-input.component.scss']
})
export class TaskInputComponent { 
  inputText: string = '';

  constructor(private addTaskAction: AddTaskAction, private completeAllTasksAction: CompleteAllTasksAction) {
  }

  addTask() {
    if (this.inputText.length > 0) {
      this.addTaskAction.execute(this.inputText);
      this.inputText = '';
    }
  }

  completeAllTasks() {
    this.completeAllTasksAction.execute();
  }
}