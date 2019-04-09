import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpm',
  templateUrl: './cpm.component.html',
  styleUrls: ['./cpm.component.css']
})
export class CpmComponent implements OnInit {

  lang = window.navigator.language;

  timeLeft: number = 10;
  clicks: number = 0;
  cpm: number = 0;
  highScore: number = parseInt(localStorage.getItem('cpmHighScore'));
  gameRunning: boolean = false;

  constructor() {
    if (!localStorage.getItem('cpmHighScore')) {
      this.highScore = 0;
    }

    setInterval(() => {
      if (this.gameRunning && this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.cpmCounter();
      }
    }, 1000)
  }

  ngOnInit() {
  }

  clickCounter() {
    this.clicks++;
  }

  cpmCounter() {
    this.cpm = (this.clicks * 6);
    if (this.cpm > this.highScore) {
      localStorage.setItem('cpmHighScore', this.cpm.toString());
      this.highScore = this.cpm;
    }
  }

  restartGame() {
    this.gameRunning = true;
    this.timeLeft = 10;
  }
}
