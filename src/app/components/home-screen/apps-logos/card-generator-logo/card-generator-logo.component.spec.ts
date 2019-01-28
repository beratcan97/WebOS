import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeneratorLogoComponent } from './card-generator-logo.component';

describe('CardGeneratorLogoComponent', () => {
  let component: CardGeneratorLogoComponent;
  let fixture: ComponentFixture<CardGeneratorLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGeneratorLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGeneratorLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
