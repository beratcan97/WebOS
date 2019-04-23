import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsLogoComponent } from './maps-logo.component';

describe('MapsLogoComponent', () => {
  let component: MapsLogoComponent;
  let fixture: ComponentFixture<MapsLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
