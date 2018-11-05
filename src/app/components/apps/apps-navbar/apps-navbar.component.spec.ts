import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsNavbarComponent } from './apps-navbar.component';

describe('AppsNavbarComponent', () => {
  let component: AppsNavbarComponent;
  let fixture: ComponentFixture<AppsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
