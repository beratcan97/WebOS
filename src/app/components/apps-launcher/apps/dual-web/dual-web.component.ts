import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dual-web',
  templateUrl: './dual-web.component.html',
  styleUrls: ['./dual-web.component.css']
})
export class DualWebComponent implements OnInit {

  lang = window.navigator.language;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(route): void {
    this.router.navigate([route]);
  }
}