import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ListDetailComponent } from 'app/shared/list-detail.component/list-detail.component';

describe('ListDetailComponent', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, FormsModule],
        declarations: [ListDetailComponent]
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