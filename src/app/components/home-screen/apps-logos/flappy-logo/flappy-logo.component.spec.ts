import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlappyLogoComponent } from './flappy-logo.component';

describe('FlappyLogoComponent', () => {
  let component: FlappyLogoComponent;
  let fixture: ComponentFixture<FlappyLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlappyLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlappyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
