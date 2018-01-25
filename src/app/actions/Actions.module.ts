import { NgModule } from '@angular/core';
import { AddTaskAction } from 'app/actions/tasks/AddTask.action';
import { ClearCompletedTasksAction } from 'app/actions/tasks/ClearCompletedTasks.action';
import { CompleteAllTasksAction } from 'app/actions/tasks/CompleteAllTasks.action';
import { DeleteTaskAction } from 'app/actions/tasks/DeleteTask.action';
import { UpdateFilterAction } from 'app/actions/tasks/UpdateFilter.action';
import { UpdateTaskAction } from 'app/actions/tasks/UpdateTask.action';

@NgModule({
  providers: [AddTaskAction, UpdateTaskAction, UpdateFilterAction, DeleteTaskAction, CompleteAllTasksAction, ClearCompletedTasksAction]
})
export class ActionsModule {}
