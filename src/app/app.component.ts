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
    this.delay(3000).then(any => {
      this.isLoaded = true;
    });

    this.weatherAPIService.getWeather()
      .subscribe(
        error => console.log(error),
      );
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
