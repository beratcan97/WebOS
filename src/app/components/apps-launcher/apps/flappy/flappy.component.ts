import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

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
  //Line 1
  topPipe = 1;
  bottomPipe = 1;
  //Line 2
  topPipe2 = -50;
  bottomPipe2 = -50;

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
      this.checkCrash();
      this.pipeUpdate();
      this.updatePlayer();
      this.updateScore();
    }, 25);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    this.resetGame();
  }

  pipeUpdate(): void {
    //Line 1
    this.topPipe++;
    this.bottomPipe++;

    //Top pipe updater 
    if (this.topPipe == 100) {
      this.topPipe = 1;
    } else {
      document.getElementById('tp1').style.right = (this.topPipe.toString() + '%');
    }
    2
    //Bottom pipe updater 
    if (this.bottomPipe == 100) {
      this.bottomPipe = 1;
    } else {
      document.getElementById('bp1').style.right = (this.bottomPipe.toString() + '%');
    }

    //Line 2
    this.topPipe2++;
    this.bottomPipe2++;

    //Top pipe updater 
    if (this.topPipe2 == 100) {
      this.topPipe2 = 2;
    } else {
      document.getElementById('tp2').style.right = (this.topPipe2.toString() + '%');
    }
    2
    //Bottom pipe updater
    if (this.bottomPipe2 == 100) {
      this.bottomPipe2 = 2;
    } else {
      document.getElementById('bp2').style.right = (this.bottomPipe2.toString() + '%');
    }
  }

  checkCrash(): void {
    //Touch floor
    if (this.playerBottom <= 5) {
      this.playerLose();
    } else
      //Touch top
      if (this.playerBottom >= 100) {
        this.playerLose();
      }

    //Line 1
    //Touch top pipe    
    if (this.topPipe > 70 && this.topPipe < 90 && this.playerBottom > 30) {
      console.log("line 1 top");
      this.playerLose();
    } else
      //Touch bottom pipe    
      if (this.bottomPipe > 70 && this.bottomPipe < 90 && this.playerBottom < 20) {
        console.log("line 1 bottom");
        this.playerLose();
      }

    //Line 2
    //Touch top pipe    
    if (this.topPipe2 > 70 && this.topPipe2 < 90 && this.playerBottom > 50) {
      console.log("line 2 top");
      this.playerLose();
    } else
      //Touch bottom pipe    
      if (this.bottomPipe2 > 70 && this.bottomPipe2 < 90 && this.playerBottom < 40) {
        console.log("line 2 bottom");
        this.playerLose();
      }
  }

  playerLose(): void {
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
    this.playerBottom = (this.playerBottom - 0.4);
    document.getElementById('player').style.bottom = (this.playerBottom.toString() + '%');
  }

  onScreenClick(): void {
    this.playerBottom = this.playerBottom + 5;
    document.getElementById('player').style.bottom = (this.playerBottom.toString() + '%');
  }

  resetGame(): void {
    //Player
    this.playerBottom = 50;

    //pipe
    //Line 1
    this.bottomPipe = 1;
    this.topPipe = 1;
    //Line 2
    this.bottomPipe2 = -50;
    this.topPipe2 = -50;

    //Score
    this.score = 0;
  }
}
