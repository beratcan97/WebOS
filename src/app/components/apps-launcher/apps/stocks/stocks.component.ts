import { Component, OnInit } from '@angular/core';
import { StocksApiService } from '../../../../services/stocks-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  searchForm: FormGroup;

  curFromToData;

  lang = window.navigator.language;

  constructor(private stocksApiService: StocksApiService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.searchForm = this.fb.group({
      fromCur: '',
      toCur: ''
    })
  }

  getCurrency() {
    this.stocksApiService.getFromCurToCur(this.searchForm.value.fromCur, this.searchForm.value.toCur)
      .subscribe(
        DATA => this.curFromToData = DATA,
        error => console.log(error),
      );
  }
}