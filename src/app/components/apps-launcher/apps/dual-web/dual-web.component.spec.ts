import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DualWebComponent } from './dual-web.component';
import { AppsLauncherComponent } from '../../apps-launcher.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DualWebComponent', () => {
  let component: DualWebComponent;
  let fixture: ComponentFixture<DualWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DualWebComponent,
        AppsLauncherComponent
      ],
      imports: [
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
