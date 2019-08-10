import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { AppsLauncherComponent } from '../../../../apps-launcher.component';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  let localStorage = {"username":"name","password":"pass","birthdate":"1997","gender":"male","wallpaper":"lightskyblue","auth":"true","id":"yourID","userCreated":"2019-6-11","lastSignedIn":"2019-8-10","cash":"0","email":"name@hotmail.com"};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        AppsLauncherComponent,
        // {provide: user, useClass: localStorage}
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
