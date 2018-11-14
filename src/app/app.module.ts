import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { DockComponent } from './components/home-screen/dock/dock.component';
import { AppsLogosComponent } from './components/home-screen/apps-logos/apps-logos.component';
import { AppsLauncherComponent } from './components/apps-launcher/apps-launcher.component';

// LOGOS
import { NewsLogoComponent } from './components/home-screen/apps-logos/news-logo/news-logo.component';
import { StocksLogoComponent } from './components/home-screen/apps-logos/stocks-logo/stocks-logo.component';

//APPS
import { NewsComponent } from './components/apps-launcher/apps/news/news.component';
import { StocksComponent } from './components/apps-launcher/apps/stocks/stocks.component';

const appRoutes: Routes = [
  { path: '', component: HomeScreenComponent },

  //APPS
  { path: 'news', component: NewsComponent },
  { path: 'stocks', component: StocksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    DockComponent,
    AppsLogosComponent,
    AppsLauncherComponent,

    // LOGOS
    NewsLogoComponent,
    StocksLogoComponent,

    // APPS
    NewsComponent,
    StocksComponent,
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
