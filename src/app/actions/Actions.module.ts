import { NgModule } from '@angular/core';
import { AddTaskAction } from 'app/actions/tasks/AddTask.action';
import { UpdateFilterAction } from 'app/actions/tasks/UpdateFilter.action';
import { UpdateTaskAction } from 'app/actions/tasks/UpdateTask.action';

@NgModule({
  providers: [AddTaskAction, UpdateTaskAction, UpdateFilterAction]
})
export class ActionsModule {}
