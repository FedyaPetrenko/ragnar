import { NgModule } from '@angular/core';
import { TasksService } from 'app/service/tasks.service';
import { ValuesService } from 'app/service/values.service';

@NgModule({
  providers: [ValuesService, TasksService]
})
export class ServicesModule {}
