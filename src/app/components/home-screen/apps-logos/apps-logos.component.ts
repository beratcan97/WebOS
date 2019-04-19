import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apps-logos',
  templateUrl: './apps-logos.component.html',
  styleUrls: ['./apps-logos.component.css']
})
export class AppsLogosComponent implements OnInit {

  device = localStorage.getItem('device');
  phoneWidth: boolean;

  constructor() { }

  ngOnInit() {
    if (this.device == 'Phone') {
      this.phoneWidth = true;
    }
  }
}
