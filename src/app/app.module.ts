import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { DockComponent } from './components/home-screen/dock/dock.component';
import { AppsLogosComponent } from './components/home-screen/apps-logos/apps-logos.component';

// LOGOS
import { DnLogoComponent } from './components/home-screen/apps-logos/dn-logo/dn-logo.component';

//APPS
import { DnComponent } from './components/apps-launcher/apps/dn/dn.component';
import { AppsLauncherComponent } from './components/apps-launcher/apps-launcher.component';

const appRoutes: Routes = [
  { path: '', component: HomeScreenComponent },

  //APPS
  { path: 'news', component: DnComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    DockComponent,
    AppsLogosComponent,

    // LOGOS
    DnLogoComponent,

    // APPS
    DnComponent,

    AppsLauncherComponent,

  ],

  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    //{ enableTracing: true } // <-- debugging purposes only
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
