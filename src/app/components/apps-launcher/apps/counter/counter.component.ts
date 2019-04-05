import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  lang = window.navigator.language;
  counter = localStorage.getItem('counter');

  constructor() { }

  ngOnInit() {
    if (!localStorage.getItem('counter')) {
      this.counter = '0';
    }
  }

  count(): void {
    let counterTmp = Number(this.counter) + 1;
    this.counter = counterTmp + "";
    localStorage.setItem('counter', this.counter);
  };

  resetCounter(): void {
    localStorage.setItem('counter', '0');
    this.counter = '0';
  }
}