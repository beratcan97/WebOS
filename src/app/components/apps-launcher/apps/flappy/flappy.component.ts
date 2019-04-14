import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flappy',
  templateUrl: './flappy.component.html',
  styleUrls: ['./flappy.component.css']
})
export class FlappyComponent implements OnInit {

  lang = window.navigator.language;

  highScore: number = parseInt(localStorage.getItem('cpmGameHighScore'));
  gameRunning: boolean = false;
  
  constructor() {
    if (!localStorage.getItem('flappyGameHighScore')) {
      this.highScore = 0;
    }
  }

  ngOnInit() {
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  restartGame() {
    this.gameRunning = true;
  }

  createGameArea() {
    this.delay(3000).then(any => {
      var canvas = document.getElementById('gameScreen');
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, 100, 100);

      ctx.fillStyle = 'blue';
      ctx.fillRect(0, 0, 10, 10);
    });
  }
}
