import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flappy',
  templateUrl: './flappy.component.html',
  styleUrls: ['./flappy.component.css']
})
export class FlappyComponent implements OnInit {

  lang = window.navigator.language;

  highScore: number = parseInt(localStorage.getItem('cpmGameHighScore'));
  gameRunning: boolean = true;

  constructor() {
    if (!localStorage.getItem('flappyGameHighScore')) {
      this.highScore = 0;
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.updateGameScreen();
    }, 1000)
  }

  updateGameScreen() {
  }

  createGameArea() {
    var canvas = document.getElementById('gameScreen');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      //Player
      ctx.fillStyle = 'red';
      ctx.fillRect(30, 120, 30, 30);

      //Moving obstacle
      ctx.fillStyle = 'green';
      ctx.fillRect(300, 120, 10, 200);
    }
  }

  restartGame() {
    this.gameRunning = true;
  }
}
