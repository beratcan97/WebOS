import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blackjack-logo',
  templateUrl: './blackjack-logo.component.html',
  styleUrls: ['./blackjack-logo.component.css']
})
export class BlackjackLogoComponent implements OnInit {

  lang = window.navigator.language;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/blackJack']);
  }
}