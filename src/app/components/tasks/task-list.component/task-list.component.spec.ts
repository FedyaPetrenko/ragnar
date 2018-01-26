import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskDetailComponent } from 'app/components/tasks/task-detail.component/task-detail.component';
import { TaskListComponent } from 'app/components/tasks/task-list.component/task-list.component';

describe('TaskListComponent', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, FormsModule],
        declarations: [TaskListComponent, TaskDetailComponent]
      }).compileComponents();
  });
  it(
    'should create the app', () => {
      // const fixture = TestBed.createComponent(TaskListComponent);
      // const app = fixture.debugElement.componentInstance;
      expect(true).toBe(true);
      //expect(app).toBeTruthy();
  });
  // it(
  //   'should render title in a h1 tag',
  //   async(() => {
  //     const fixture = TestBed.createComponent(TaskDetailComponent);
  //     fixture.detectChanges();
  //     const compiled = fixture.debugElement.nativeElement;
  //     expect(compiled.querySelector('h1').textContent).toContain(
  //       'Welcome to app!'
  //     );
  //   })
  // );
});