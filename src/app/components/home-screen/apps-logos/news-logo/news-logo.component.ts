import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-logo',
  templateUrl: './news-logo.component.html',
  styleUrls: ['./news-logo.component.css']
})
export class NewsLogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['/news']);
  }
}
