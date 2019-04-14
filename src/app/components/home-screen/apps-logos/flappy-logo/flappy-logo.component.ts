import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flappy-logo',
  templateUrl: './flappy-logo.component.html',
  styleUrls: ['./flappy-logo.component.css']
})
export class FlappyLogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate(): void {
    this.router.navigate(['/flappy']);
  }
}