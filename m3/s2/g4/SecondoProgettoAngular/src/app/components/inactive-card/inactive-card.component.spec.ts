import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveCardComponent } from './inactive-card.component';

describe('InactiveCardComponent', () => {
  let component: InactiveCardComponent;
  let fixture: ComponentFixture<InactiveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InactiveCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InactiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
