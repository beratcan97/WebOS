import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  lang = window.navigator.language;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(route): void {
    this.router.navigate([route]);
  }
}
