import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmLogoComponent } from './cpm-logo.component';

describe('CpmLogoComponent', () => {
  let component: CpmLogoComponent;
  let fixture: ComponentFixture<CpmLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpmLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
