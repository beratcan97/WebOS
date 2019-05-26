import { Component } from '@angular/core';
import { WeatherAPIService } from './services/weather-api.service';
import { StocksApiService } from './services/stocks-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebOS';
  isInstalled: boolean = false;
  isLoaded: boolean = false;

  constructor(
    private weatherAPIService: WeatherAPIService,
    private router: Router,
    private stocksApiService: StocksApiService) { }

  ngOnInit() {
    setTimeout(any => {
      this.isLoaded = true;
    }, 3000);

    // Get external DATA
    this.weatherAPIService.getWeather().subscribe();

    this.router.navigate(['./auth']);
  }

  getDevice() {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      return 'Phone';
    }
    else {
      return 'Desktop';
    }
  }
}
