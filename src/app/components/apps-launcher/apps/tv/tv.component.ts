import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent implements OnInit {

  width = '100%';
  collapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setWidth() {
    if (this.collapsed) {
      this.width = '100%';
      this.collapsed = false;
    }
    else {
      this.width = '110%';
      this.collapsed = true;
    }
  }
}
