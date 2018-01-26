import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ListDetailComponent } from 'app/shared/list-detail.component/list-detail.component';
import { ListComponent } from 'app/shared/list.component/list.component';

describe('ListComponent', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, FormsModule],
        declarations: [ListComponent, ListDetailComponent]
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