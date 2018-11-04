import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { TopBarComponent } from './components/home-screen/top-bar/top-bar.component';
import { DockComponent } from './components/home-screen/dock/dock.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    TopBarComponent,
    DockComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
