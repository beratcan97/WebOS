import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesLogoComponent } from './notes-logo.component';

describe('NotesLogoComponent', () => {
  let component: NotesLogoComponent;
  let fixture: ComponentFixture<NotesLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
