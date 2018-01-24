import { NgModule } from '@angular/core';
import { Store } from 'app/store/store';
import { TaskStore } from 'app/store/task.store';

@NgModule({
  providers: [Store, TaskStore]
})
export class StoreModule {}