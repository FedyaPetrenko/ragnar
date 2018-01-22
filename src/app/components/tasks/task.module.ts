import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskDetailComponent } from 'app/components/tasks/task-detail.component/task-detail.component';
import { TaskFilterComponent } from 'app/components/tasks/task-filter.component/task-filter.component';
import { TaskInputComponent } from 'app/components/tasks/task-input.component/task-input.component';
import { TaskListComponent } from 'app/components/tasks/task-list.component/task-list.component';
import { TasksComponent } from 'app/components/tasks/tasks.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [TasksComponent, TaskInputComponent, TaskListComponent, TaskDetailComponent, TaskFilterComponent],
  declarations: [TasksComponent, TaskInputComponent, TaskListComponent, TaskDetailComponent, TaskFilterComponent],
})
export class TaskModule {}
