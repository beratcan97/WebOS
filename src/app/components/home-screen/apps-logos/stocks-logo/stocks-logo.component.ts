import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stocks-logo',
  templateUrl: './stocks-logo.component.html',
  styleUrls: ['./stocks-logo.component.css']
})
export class StocksLogoComponent implements OnInit {

  constructor(private router: Router) { }

  lang = window.navigator.language;

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/stocks']);
  }
}
