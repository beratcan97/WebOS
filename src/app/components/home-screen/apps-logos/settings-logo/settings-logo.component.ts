import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-logo',
  templateUrl: './settings-logo.component.html',
  styleUrls: ['./settings-logo.component.css']
})
export class SettingsLogoComponent implements OnInit {

  constructor(private router: Router) { }

  lang = window.navigator.language;

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/settings']);
  }
}
