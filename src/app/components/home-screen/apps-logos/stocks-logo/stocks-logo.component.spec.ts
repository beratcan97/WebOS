import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksLogoComponent } from './stocks-logo.component';

describe('StocksLogoComponent', () => {
  let component: StocksLogoComponent;
  let fixture: ComponentFixture<StocksLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
