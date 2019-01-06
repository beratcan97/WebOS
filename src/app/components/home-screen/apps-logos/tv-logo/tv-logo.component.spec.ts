import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TVLogoComponent } from './tv-logo.component';

describe('TVLogoComponent', () => {
  let component: TVLogoComponent;
  let fixture: ComponentFixture<TVLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TVLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TVLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
