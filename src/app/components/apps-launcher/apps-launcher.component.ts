import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-apps-launcher',
  templateUrl: './apps-launcher.component.html',
  styleUrls: ['./apps-launcher.component.css']
})
export class AppsLauncherComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  navBack() {
    this.location.back();
  }
}
