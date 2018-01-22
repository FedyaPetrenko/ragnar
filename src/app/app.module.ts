import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/components/app.component';
import { HomeModule } from 'app/components/home/home.module';
import { TaskModule } from 'app/components/tasks/task.module';
import { ServicesModule } from 'app/service/services.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, TaskModule, ServicesModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
