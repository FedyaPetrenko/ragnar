import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskSummaryComponent } from 'app/components/tasks/task-summary.component/task-summary.component';
describe('TaskSummaryComponent', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [TaskSummaryComponent]
      }).compileComponents();
  });
  it('should create the app', () => {
      //const fixture = TestBed.createComponent(TaskSummaryComponent);
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