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
  bet: number = 0;
  cash: number = 10;
  result: string = 'Bet & spin!';

  spinning = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => { this.isLoaded = true }, 3000);
  }

  spin(bet) {
    if (this.cash >= bet) {
      this.cash = this.cash - bet;
      this.result = 'Spinning';
      let spinner = setInterval(() => {
        this.spinning = true;
        this.spinner1 = this.generateRandomNumber();
        this.spinner2 = this.generateRandomNumber();
        this.spinner3 = this.generateRandomNumber();

        //sets random color
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        this.changeColor(color);
      }, 100);
      setTimeout(() => {
        clearInterval(spinner);
        this.spinning = false;
        this.checkWin(bet);
      }, 3000);
    } else {
      this.result = 'No money left';
    }
  }

  checkWin(bet) {
    //All 3 same
    if (this.spinner1 === this.spinner2 && this.spinner1 === this.spinner3) {
      this.result = 'Jackpot';
      this.changeColor('green');
      this.cash = this.cash + (100 * bet);
    }
    //2 same
    else if (this.spinner1 === this.spinner2 || this.spinner2 === this.spinner3 || this.spinner1 === this.spinner3) {
      this.result = 'Win';
      this.changeColor('green');
      this.cash = this.cash + (4 * bet);
    }
    //Lose
    else {
      this.result = 'Lose';
      this.changeColor('red');
    }
  }

  changeColor(color) {
    document.getElementById('color').style.borderColor = color;
  }

  generateRandomNumber() {
    return Math.floor((Math.random() * 10) + 1);
  }
}
