import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterLogoComponent } from './counter-logo.component';

describe('CounterLogoComponent', () => {
  let component: CounterLogoComponent;
  let fixture: ComponentFixture<CounterLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
