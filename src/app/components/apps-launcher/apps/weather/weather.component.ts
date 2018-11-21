import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../../../../services/weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData;
  isWeatherDataLoaded: boolean = false;

  constructor(private weatherAPIService: WeatherAPIService) { }

  ngOnInit() {
    this.weatherAPIService.weatherDATA$
      .subscribe(
        DATA => this.weatherData = DATA,
        error => console.log(error),
      );
  }
}