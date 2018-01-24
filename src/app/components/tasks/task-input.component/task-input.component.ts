import { Component } from '@angular/core';
import { AddTaskAction } from 'app/actions/tasks/AddTask.action';
import { ApplyTaskFilterAction } from 'app/actions/tasks/ApplyTaskFilter.action';

@Component({
  selector: 'task-input-component',
  templateUrl: 'task-input.component.html',
  styleUrls: ['task-input.component.scss']
})
export class TaskInputComponent { 
  inputText: string = '';

  constructor(private addTaskAction: AddTaskAction, private applyTaskFilterAction: ApplyTaskFilterAction) {
  }

  addTask() {
    if (this.inputText.length > 0) {
      this.addTaskAction.execute(this.inputText);
      this.applyTaskFilterAction.execute();
      this.inputText = '';
    }
  }
}