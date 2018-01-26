import { NgModule } from '@angular/core';
import { AddTaskAction } from 'app/actions/tasks/add-task.action';
import { ClearCompletedTasksAction } from 'app/actions/tasks/clear-completed-tasks.action';
import { CompleteAllTasksAction } from 'app/actions/tasks/complete-all-tasks.action';
import { DeleteTaskAction } from 'app/actions/tasks/delete-task.action';
import { UpdateFilterAction } from 'app/actions/tasks/update-filter.action';
import { UpdateTaskAction } from 'app/actions/tasks/update-task.action';

@NgModule({
  providers: [AddTaskAction, UpdateTaskAction, UpdateFilterAction, DeleteTaskAction, CompleteAllTasksAction, ClearCompletedTasksAction]
})
export class ActionsModule {}
