import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlackjackComponent } from './blackjack.component';
import { AppsLauncherComponent } from '../../apps-launcher.component';

describe('BlackjackComponent', () => {
  let component: BlackjackComponent;
  let fixture: ComponentFixture<BlackjackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackjackComponent, AppsLauncherComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackjackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
