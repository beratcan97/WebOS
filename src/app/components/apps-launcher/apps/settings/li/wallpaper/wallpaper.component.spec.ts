import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WallpaperComponent } from './wallpaper.component';
import { AppsLauncherComponent } from '../../../../apps-launcher.component';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('WallpaperComponent', () => {
  let component: WallpaperComponent;
  let fixture: ComponentFixture<WallpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WallpaperComponent,
        AppsLauncherComponent
      ],
      imports: [
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
