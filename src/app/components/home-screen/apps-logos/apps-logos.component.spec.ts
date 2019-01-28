import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsLogosComponent } from './apps-logos.component';

describe('AppsLogosComponent', () => {
  let component: AppsLogosComponent;
  let fixture: ComponentFixture<AppsLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppsLogosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
