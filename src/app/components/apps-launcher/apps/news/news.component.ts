import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../../../services/news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  lang = window.navigator.language;
  engNewsDATA;
  isEngNewsDATALoaded: boolean = false;

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit() {
    this.newsApiService.engNewsDATA$
      .subscribe(
        DATA => this.setVariables(DATA),
        error => console.log(error),
      );
  }

  setVariables(DATA) {
    this.engNewsDATA = DATA;
    this.isEngNewsDATALoaded = true;
  }
}
