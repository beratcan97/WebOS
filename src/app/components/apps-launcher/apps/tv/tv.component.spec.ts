import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TVComponent } from './tv.component';
import { AppsLauncherComponent } from '../../apps-launcher.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TVComponent', () => {
  let component: TVComponent;
  let fixture: ComponentFixture<TVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TVComponent,
        AppsLauncherComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
