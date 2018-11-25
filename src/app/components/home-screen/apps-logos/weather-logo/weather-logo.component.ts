import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherAPIService } from '../../../../services/weather-api.service';

@Component({
  selector: 'app-weather-logo',
  templateUrl: './weather-logo.component.html',
  styleUrls: ['./weather-logo.component.css']
})
export class WeatherLogoComponent implements OnInit {

  lang = window.navigator.language;

  weatherData;

  constructor(private router: Router,
    private weatherAPIService: WeatherAPIService) { }

  ngOnInit() {
    this.weatherAPIService.weatherDATA$
      .subscribe(
        DATA => this.weatherData = DATA,
        error => console.log(error),
      );
  }

  navigate(): void {
    this.router.navigate(['/weather']);
  }
}
