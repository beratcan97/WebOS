import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter-logo',
  templateUrl: './counter-logo.component.html',
  styleUrls: ['./counter-logo.component.css']
})
export class CounterLogoComponent implements OnInit {

  constructor(private router: Router) { }

  lang = window.navigator.language;

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/counter']);
  }

}
