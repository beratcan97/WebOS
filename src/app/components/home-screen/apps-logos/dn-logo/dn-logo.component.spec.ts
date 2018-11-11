import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnLogoComponent } from './dn-logo.component';

describe('DnLogoComponent', () => {
  let component: DnLogoComponent;
  let fixture: ComponentFixture<DnLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
