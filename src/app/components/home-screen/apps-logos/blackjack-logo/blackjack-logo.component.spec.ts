import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackjackLogoComponent } from './blackjack-logo.component';

describe('BlackjackLogoComponent', () => {
  let component: BlackjackLogoComponent;
  let fixture: ComponentFixture<BlackjackLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackjackLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackjackLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
