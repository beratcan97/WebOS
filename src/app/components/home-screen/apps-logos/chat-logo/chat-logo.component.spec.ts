import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLogoComponent } from './chat-logo.component';

describe('ChatLogoComponent', () => {
  let component: ChatLogoComponent;
  let fixture: ComponentFixture<ChatLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
