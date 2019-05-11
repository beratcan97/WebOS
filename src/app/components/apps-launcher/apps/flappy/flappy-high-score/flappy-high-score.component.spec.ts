import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlappyHighScoreComponent } from './flappy-high-score.component';

describe('FlappyHighScoreComponent', () => {
  let component: FlappyHighScoreComponent;
  let fixture: ComponentFixture<FlappyHighScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlappyHighScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlappyHighScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
