import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cpm-logo',
  templateUrl: './cpm-logo.component.html',
  styleUrls: ['./cpm-logo.component.css']
})
export class CpmLogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/cpm']);
  }
}
