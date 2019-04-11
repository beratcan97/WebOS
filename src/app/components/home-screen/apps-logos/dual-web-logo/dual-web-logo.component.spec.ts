import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualWebLogoComponent } from './dual-web-logo.component';

describe('DualWebLogoComponent', () => {
  let component: DualWebLogoComponent;
  let fixture: ComponentFixture<DualWebLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualWebLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualWebLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
