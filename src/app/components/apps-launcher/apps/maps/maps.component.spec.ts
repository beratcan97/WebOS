import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MapsComponent } from './maps.component';
import { AppsLauncherComponent } from '../../apps-launcher.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MapsComponent', () => {
  let component: MapsComponent;
  let fixture: ComponentFixture<MapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MapsComponent,
        AppsLauncherComponent
      ],
      imports: [
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
