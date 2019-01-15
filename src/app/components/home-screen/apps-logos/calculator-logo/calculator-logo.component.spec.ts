import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorLogoComponent } from './calculator-logo.component';

describe('CalculatorLogoComponent', () => {
  let component: CalculatorLogoComponent;
  let fixture: ComponentFixture<CalculatorLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
