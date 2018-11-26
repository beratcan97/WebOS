import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http, Response, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  public readonly engNewsDATA$: Observable<any> = this.getWeather();

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=d87ccccb45d44602908645a25a3bdc0b');
  }
}
