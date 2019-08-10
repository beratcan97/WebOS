import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CpmComponent } from './cpm.component';
import { AppsLauncherComponent } from '../../apps-launcher.component';

xdescribe('CpmComponent', () => {
  let component: CpmComponent;
  let fixture: ComponentFixture<CpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CpmComponent,
        AppsLauncherComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
