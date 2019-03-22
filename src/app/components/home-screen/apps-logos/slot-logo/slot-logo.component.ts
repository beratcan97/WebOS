import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slot-logo',
  templateUrl: './slot-logo.component.html',
  styleUrls: ['./slot-logo.component.css']
})
export class SlotLogoComponent implements OnInit {

  constructor(private router: Router) { }

  lang = window.navigator.language;

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/slot']);
  }
}
