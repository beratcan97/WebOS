import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator-logo',
  templateUrl: './calculator-logo.component.html',
  styleUrls: ['./calculator-logo.component.css']
})
export class CalculatorLogoComponent implements OnInit {

  constructor(private router: Router) { }

  lang = window.navigator.language;

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/calculator']);
  }
}
