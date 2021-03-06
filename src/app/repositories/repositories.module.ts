import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RequestLoggingInterceptor } from 'app/repositories/interceptors/request-logging.interceptor';
import { ValuesRepository } from 'app/repositories/values.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ValuesRepository,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestLoggingInterceptor,
      multi: true
    }
  ]
})
export class RepositoriesModule {}
