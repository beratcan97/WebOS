import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLogoComponent } from './weather-logo.component';

describe('WeatherLogoComponent', () => {
  let component: WeatherLogoComponent;
  let fixture: ComponentFixture<WeatherLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
