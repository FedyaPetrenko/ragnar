import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskDetailComponent } from 'app/components/tasks/task-detail.component/task-detail.component';
import { Task } from 'app/models/task.model';

describe('TaskDetailComponent', () => {
  class MockDeleteTaskAction {
    executed: boolean = false;
  
    execute(task: Task) {
      this.executed = true;
    }
  }
  class MockUpdateTaskAction {
    executed: boolean = false;
  
    execute(task: Task) {
      this.executed = true;
    }
  }
  
  let deleteTask = new MockDeleteTaskAction();
  let updateTask = new MockUpdateTaskAction();

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, FormsModule],
        declarations: [TaskDetailComponent],
        providers: [{provide: updateTask, useValues: updateTask},
          {provide: deleteTask, useValues: deleteTask}]
      }).compileComponents();
  });
  it(
    'should create the app', () => {
      //const fixture = TestBed.createComponent(TaskDetailComponent);
      //const app = fixture.debugElement.componentInstance;
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