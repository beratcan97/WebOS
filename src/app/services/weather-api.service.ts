import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http, Response, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherAPIService {

  public readonly weatherDATA$: Observable<any> = this.getWeather();

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,se&units=metric&APPID=bc399329a40cf183523b1b5d4e8ed33b');
  }
}