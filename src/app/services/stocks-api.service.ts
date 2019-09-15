import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StocksApiService {

  constructor(private http: HttpClient) { }

  getFromCurToCur(fromCur, toCur): Observable<any> {
    return this.http.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' + fromCur + '&to_currency=' + toCur + '&apikey=UX0BHMTQOZ508A9W');
  }
}