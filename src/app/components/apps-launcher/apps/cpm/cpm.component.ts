import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cpm',
  templateUrl: './cpm.component.html',
  styleUrls: ['./cpm.component.css']
})
export class CpmComponent implements OnInit {

  sec: number = 0;
  clicks: number = 0;
  cpm: number = 0;

  constructor() {
    setInterval(() => {
      this.sec ++;
    }, 1000)
  }

  ngOnInit() {
  }

  clickCounter() {
    this.clicks ++;
  }

  cpmCounter() {
    this.cpm = ((this.clicks * 60) / this.sec);
  }
}
