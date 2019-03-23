import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {

  lang = window.navigator.language;
  isLoaded: boolean = false;

  spinner1: number = 0;
  spinner2: number = 0;
  spinner3: number = 0;
  cash: number = 10;

  constructor() { }

  ngOnInit() {
    this.delay(3000).then(any => {
      this.isLoaded = true;
    });
  }
  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  spin() {
    if (this.cash) {
      this.cash = this.cash - 1;

      this.spinner1 = this.generateRandomNumber();
      this.spinner2 = this.generateRandomNumber();
      this.spinner3 = this.generateRandomNumber();
  
      this.checkWin();
    } else {
      alert("No money left");
    }
  }

  checkWin() {
    //All 3 same
    if (this.spinner1 === this.spinner2 && this.spinner1 === this.spinner3) {
      alert('jackpot');
      this.cash = this.cash + 1001;
    } 
    //2 same
    else if (this.spinner1 === this.spinner2 || this.spinner2 === this.spinner3 || this.spinner1 === this.spinner3) {
      alert('Win');
      this.cash = this.cash + 4;
    }
  }

  generateRandomNumber() {
    return Math.floor((Math.random() * 10) + 1);
  }
}
