import { Component } from '@angular/core';
import { WeatherAPIService } from './services/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebOS';
  isInstalled: boolean = false;
  isLoaded: boolean = false;

  constructor(private weatherAPIService: WeatherAPIService) { }

  ngOnInit() {
    setTimeout(any => {
      this.isLoaded = true;
    }, 3000);

    this.weatherAPIService.getWeather().subscribe();

    //localStorage
    if (localStorage.length) {
      //device
      localStorage.setItem('device', this.getDevice());
      //wallpaper
      localStorage.setItem('wallpaper', 'blueviolet');
    }
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
