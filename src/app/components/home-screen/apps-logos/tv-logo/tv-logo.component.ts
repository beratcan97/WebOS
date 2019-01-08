import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-logo',
  templateUrl: './tv-logo.component.html',
  styleUrls: ['./tv-logo.component.css']
})
export class TVLogoComponent implements OnInit {

  constructor(private router: Router) { }

  lang = window.navigator.language;
  device = localStorage.getItem('device');

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/tv']);
  }

}
