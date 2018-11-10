import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
/*
import { DockComponent } from './components/home-screen/dock/dock.component';
import { AppsLogosComponent } from './components/home-screen/apps-logos/apps-logos.component';
import { FacebookLogoComponent } from './components/home-screen/apps-logos/facebook/facebook.component';
import { FacebookComponent } from './components/apps/facebook/facebook.component';
import { AppsNavbarComponent } from './components/apps/apps-navbar/apps-navbar.component';
*/
const appRoutes: Routes = [
  { path: '', component: HomeScreenComponent },
  //{ path: 'apps/facebook', component: FacebookComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    /*
    DockComponent,
    AppsLogosComponent,
    FacebookLogoComponent,
    FacebookComponent,
    AppsNavbarComponent,*/
  ],

  imports: [
    RouterModule.forRoot(appRoutes),
    //{ enableTracing: true } // <-- debugging purposes only
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
