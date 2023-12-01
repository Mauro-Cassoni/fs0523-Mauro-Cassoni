import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTableCompletedComponent } from './todo-table-completed.component';

describe('TodoTableCompletedComponent', () => {
  let component: TodoTableCompletedComponent;
  let fixture: ComponentFixture<TodoTableCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoTableCompletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoTableCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
