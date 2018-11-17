import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apps-launcher',
  templateUrl: './apps-launcher.component.html',
  styleUrls: ['./apps-launcher.component.css']
})
export class AppsLauncherComponent implements OnInit {

  constructor(private location: Location,
    private router: Router) { }

  ngOnInit() {
  }

  navHome() {
    //this.location.back();
    this.router.navigate(['']);
  }
}
