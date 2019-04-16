import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-flappy',
  templateUrl: './flappy.component.html',
  styleUrls: ['./flappy.component.css']
})
export class FlappyComponent implements OnInit, OnDestroy {

  lang = window.navigator.language;
  gameRunning: boolean = true;


  //Player
  playerBottom = 50;

  //pipe
  bottomPipe = 1;

  //Score
  highScore: number = parseInt(localStorage.getItem('flappyGameHighScore'));
  score: number = 0;

  //Game logic
  timer;

  constructor() {
  }

  ngOnInit() {
    if (!localStorage.getItem('flappyGameHighScore')) {
      this.highScore = 0;
    }

    this.timer = setInterval(() => {
      this.tubeUpdate();
      this.updatePlayer();
      this.checkCrash();
      this.updateScore();
    }, 100);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    this.resetGame();
  }

  tubeUpdate(): void {
    this.bottomPipe++;

    if (this.bottomPipe == 100) {
      this.bottomPipe = 1;
    } else {
      document.getElementById('bp1').style.right = (this.bottomPipe.toString() + '%');
    }
  }

  checkCrash(): void {
    if (this.playerBottom <= 5) {
      //Touch floor
      this.playerLose();
    } else if (this.bottomPipe > 70 && this.bottomPipe < 90 && this.playerBottom < 20) {
      //Touch bottom pipe
      this.playerLose();
    }
  }

  playerLose() {
    alert('You lose');
    this.resetGame();
  }

  updateScore(): void {
    this.score++;

    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('flappyGameHighScore', this.score.toString());
    }
  }

  updatePlayer(): void {
    this.playerBottom--;
    document.getElementById('player').style.bottom = (this.playerBottom.toString() + '%');
  }

  onScreenClick(): void {
    this.playerBottom = this.playerBottom + 5;
    document.getElementById('player').style.bottom = (this.playerBottom.toString() + '%');
  }

  resetGame() {
    //Player
    this.playerBottom = 50;

    //pipe
    this.bottomPipe = 1;

    //Score
    this.score = 0;
  }
}
