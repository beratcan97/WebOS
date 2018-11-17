import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  lang = window.navigator.language;
  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  count(): void {
    this.counter++;
  };

  resetCounter(): void {
    this.counter = 0;
  }
}
