import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotLogoComponent } from './slot-logo.component';

describe('SlotLogoComponent', () => {
  let component: SlotLogoComponent;
  let fixture: ComponentFixture<SlotLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
