import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLogoComponent } from './settings-logo.component';

describe('SettingsLogoComponent', () => {
  let component: SettingsLogoComponent;
  let fixture: ComponentFixture<SettingsLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
