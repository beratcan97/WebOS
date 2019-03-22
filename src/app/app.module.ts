import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { DockComponent } from './components/home-screen/dock/dock.component';
import { AppsLogosComponent } from './components/home-screen/apps-logos/apps-logos.component';
import { AppsLauncherComponent } from './components/apps-launcher/apps-launcher.component';

// LOGOS
import { NewsLogoComponent } from './components/home-screen/apps-logos/news-logo/news-logo.component';
import { StocksLogoComponent } from './components/home-screen/apps-logos/stocks-logo/stocks-logo.component';
import { SettingsLogoComponent } from './components/home-screen/apps-logos/settings-logo/settings-logo.component';
import { WeatherLogoComponent } from './components/home-screen/apps-logos/weather-logo/weather-logo.component';
import { CounterLogoComponent } from './components/home-screen/apps-logos/counter-logo/counter-logo.component';
import { ClockLogoComponent } from './components/home-screen/apps-logos/clock-logo/clock-logo.component';
import { TVLogoComponent } from './components/home-screen/apps-logos/tv-logo/tv-logo.component';
import { CalculatorLogoComponent } from './components/home-screen/apps-logos/calculator-logo/calculator-logo.component';
import { CardGeneratorLogoComponent } from './components/home-screen/apps-logos/card-generator-logo/card-generator-logo.component';

//APPS
import { NewsComponent } from './components/apps-launcher/apps/news/news.component';
import { StocksComponent } from './components/apps-launcher/apps/stocks/stocks.component';
import { SettingsComponent } from './components/apps-launcher/apps/settings/settings.component';
import { WeatherComponent } from './components/apps-launcher/apps/weather/weather.component';
import { CounterComponent } from './components/apps-launcher/apps/counter/counter.component';
import { ClockComponent } from './components/apps-launcher/apps/clock/clock.component';
import { TVComponent } from './components/apps-launcher/apps/tv/tv.component';
import { CalculatorComponent } from './components/apps-launcher/apps/calculator/calculator.component';
import { CardGeneratorComponent } from './components/apps-launcher/apps/card-generator/card-generator.component';

//Settings
import { WallpaperComponent } from './components/apps-launcher/apps/settings/li/wallpaper/wallpaper.component';
import { AboutComponent } from './components/apps-launcher/apps/settings/li/about/about.component';


const appRoutes: Routes = [
  { path: '', component: HomeScreenComponent },

  //APPS
  { path: 'news', component: NewsComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'tv', component: TVComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'cardGenerator', component: CardGeneratorComponent },

  //Settings
  { path: 'wallpaper', component: WallpaperComponent },
  { path: 'about', component: AboutComponent },

  //Reroutes unmatched path
  { path: '**', redirectTo: ''},
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
    SettingsLogoComponent,
    WeatherLogoComponent,
    CounterLogoComponent,
    TVLogoComponent,
    CalculatorLogoComponent,
    CardGeneratorLogoComponent,

    // APPS
    NewsComponent,
    StocksComponent,
    SettingsComponent,
    WeatherComponent,
    CounterComponent,
    ClockLogoComponent,
    ClockComponent,
    TVComponent,
    CalculatorComponent,
    CardGeneratorComponent,

    //Settings
    WallpaperComponent,
    AboutComponent,
  ],

  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    //{ enableTracing: true } // <-- debugging purposes only
    BrowserModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
