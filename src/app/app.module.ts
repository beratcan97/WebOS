import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { DockComponent } from './components/home-screen/dock/dock.component';
import { AppsLogosComponent } from './components/home-screen/apps-logos/apps-logos.component';
import { AppsLauncherComponent } from './components/apps-launcher/apps-launcher.component';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
import { SlotLogoComponent } from './components/home-screen/apps-logos/slot-logo/slot-logo.component';
import { NotesLogoComponent } from './components/home-screen/apps-logos/notes-logo/notes-logo.component';
import { CpmLogoComponent } from './components/home-screen/apps-logos/cpm-logo/cpm-logo.component';
import { DualWebLogoComponent } from './components/home-screen/apps-logos/dual-web-logo/dual-web-logo.component';
import { FlappyLogoComponent } from './components/home-screen/apps-logos/flappy-logo/flappy-logo.component';
import { MapsLogoComponent } from './components/home-screen/apps-logos/maps-logo/maps-logo.component';
import { BlackjackLogoComponent } from './components/home-screen/apps-logos/blackjack-logo/blackjack-logo.component';

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
import { SlotComponent } from './components/apps-launcher/apps/slot/slot.component';
import { NotesComponent } from './components/apps-launcher/apps/notes/notes.component';
import { CpmComponent } from './components/apps-launcher/apps/cpm/cpm.component';
import { DualWebComponent } from './components/apps-launcher/apps/dual-web/dual-web.component';
import { FlappyComponent } from './components/apps-launcher/apps/flappy/flappy.component';
import { MapsComponent } from './components/apps-launcher/apps/maps/maps.component';
import { BlackjackComponent } from './components/apps-launcher/apps/blackjack/blackjack.component';

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
  { path: 'slot', component: SlotComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'cpm', component: CpmComponent },
  { path: 'dualWeb', component: DualWebComponent },
  { path: 'flappy', component: FlappyComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'blackJack', component: BlackjackComponent },

  //Settings
  { path: 'wallpaper', component: WallpaperComponent },
  { path: 'about', component: AboutComponent },
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
    SlotLogoComponent,
    NotesLogoComponent,
    CpmLogoComponent,
    DualWebLogoComponent,
    FlappyLogoComponent,
    MapsLogoComponent,

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
    SlotComponent,
    NotesComponent,
    CpmComponent,
    DualWebComponent,
    FlappyComponent,
    MapsComponent,

    //Settings
    WallpaperComponent,
    AboutComponent,
    BlackjackLogoComponent,
    BlackjackComponent,
  ],

  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    //{ enableTracing: true } // <-- debugging purposes only
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
