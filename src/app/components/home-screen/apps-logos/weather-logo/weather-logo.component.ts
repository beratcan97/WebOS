import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-logo',
  templateUrl: './weather-logo.component.html',
  styleUrls: ['./weather-logo.component.css']
})
export class WeatherLogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/weather']);
  }
}
