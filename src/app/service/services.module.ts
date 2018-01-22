import { NgModule } from '@angular/core';
import { TaskService } from 'app/service/task.service';
import { ValuesService } from 'app/service/values.service';

@NgModule({
  providers: [ValuesService, TaskService]
})
export class ServicesModule {}
