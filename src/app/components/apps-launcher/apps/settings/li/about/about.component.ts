import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user'));

  DATA;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(route): void {
    this.router.navigate([route]);
  }
}