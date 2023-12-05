import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPreferitiComponent } from './card-preferiti.component';

describe('CardPreferitiComponent', () => {
  let component: CardPreferitiComponent;
  let fixture: ComponentFixture<CardPreferitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPreferitiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPreferitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
