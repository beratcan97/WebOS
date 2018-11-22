import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockLogoComponent } from './clock-logo.component';

describe('ClockLogoComponent', () => {
  let component: ClockLogoComponent;
  let fixture: ComponentFixture<ClockLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
