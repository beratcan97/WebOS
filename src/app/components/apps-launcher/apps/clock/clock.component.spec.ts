import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClockComponent } from './clock.component';
import { AppsLauncherComponent } from '../../apps-launcher.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClockComponent', () => {
  let component: ClockComponent;
  let fixture: ComponentFixture<ClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClockComponent,
        AppsLauncherComponent
      ],
      imports: [
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
