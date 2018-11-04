import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { DockComponent } from './components/home-screen/dock/dock.component';
import { AppsComponent } from './components/apps/apps.component';
import { ClockComponent } from './components/apps/clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    DockComponent,
    AppsComponent,
    ClockComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
