import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-generator-logo',
  templateUrl: './card-generator-logo.component.html',
  styleUrls: ['./card-generator-logo.component.css']
})
export class CardGeneratorLogoComponent implements OnInit {

  constructor(private router: Router) { }

  lang = window.navigator.language;

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/cardGenerator']);
  }
}
