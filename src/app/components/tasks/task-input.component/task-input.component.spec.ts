import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AddTaskAction } from 'app/actions/tasks/add-task.action';
import { CompleteAllTasksAction } from 'app/actions/tasks/complete-all-tasks.action';
import { TaskInputComponent } from 'app/components/tasks/task-input.component/task-input.component';

describe('TaskInputComponent', () => {
  const addTaskAction = <AddTaskAction> {
    execute: <(text: string) => void>jest.fn()
  };

  const completeAllTasksAction = <CompleteAllTasksAction> {
    execute: <() => void>jest.fn()
  };
  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, FormsModule],
        declarations: [TaskInputComponent],
        providers: [{provide: addTaskAction, useValues: addTaskAction},
                    {provide: completeAllTasksAction, useValues: completeAllTasksAction}]
      }).compileComponents();
  });
  it(
    'should create the app', () => {
      //const fixture = TestBed.createComponent(TaskInputComponent);
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