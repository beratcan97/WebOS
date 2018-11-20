import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http, Response, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherAPIService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=Stockholm,se&units=metric&APPID=902e20f143484cc21bdab9d80c5ef9cd');
  }
}
