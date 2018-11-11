import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsLauncherComponent } from './apps-launcher.component';

describe('AppsLauncherComponent', () => {
  let component: AppsLauncherComponent;
  let fixture: ComponentFixture<AppsLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
