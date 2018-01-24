import { NgModule } from '@angular/core';
import { AddTaskAction } from 'app/actions/tasks/AddTask.action';
import { ApplyTaskFilterAction } from 'app/actions/tasks/ApplyTaskFilter.action';
import { CalculateSummaryFieldsAction } from 'app/actions/tasks/CalculateSummaryFields.action';
import { UpdateFilterAction } from 'app/actions/tasks/UpdateFilter.action';
import { UpdateTaskAction } from 'app/actions/tasks/UpdateTask.action';

@NgModule({
  providers: [AddTaskAction, ApplyTaskFilterAction, UpdateTaskAction, CalculateSummaryFieldsAction, UpdateFilterAction]
})
export class ActionsModule {}
