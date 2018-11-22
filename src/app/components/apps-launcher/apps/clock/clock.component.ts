import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  time;

  constructor() { }

  ngOnInit() {
    let dateData = new Date();
    this.time = formatDate(dateData, 'hh:mm:ss', 'en-US');
  }
}
