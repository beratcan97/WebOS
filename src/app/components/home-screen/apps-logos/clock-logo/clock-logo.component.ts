import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clock-logo',
  templateUrl: './clock-logo.component.html',
  styleUrls: ['./clock-logo.component.css']
})
export class ClockLogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/clock']);
  }
}
