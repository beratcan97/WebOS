import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLogoComponent } from './news-logo.component';

describe('NewsLogoComponent', () => {
  let component: NewsLogoComponent;
  let fixture: ComponentFixture<NewsLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsLogoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
