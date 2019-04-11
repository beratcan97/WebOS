import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualWebComponent } from './dual-web.component';

describe('DualWebComponent', () => {
  let component: DualWebComponent;
  let fixture: ComponentFixture<DualWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
