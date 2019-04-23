import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps-logo',
  templateUrl: './maps-logo.component.html',
  styleUrls: ['./maps-logo.component.css']
})
export class MapsLogoComponent implements OnInit {

  constructor(private router: Router) { }
  lang = window.navigator.language;

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/maps']);
  }
}