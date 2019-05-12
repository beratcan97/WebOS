import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-flappy',
  templateUrl: './flappy.component.html',
  styleUrls: ['./flappy.component.css']
})
export class FlappyComponent implements OnInit, OnDestroy {

  lang = window.navigator.language;
  dateDATA = new Date();

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
  score: number = Math.floor((Math.random() * 30) + 10);

  //Game logic
  timer;
  newPosForPipes: number;

  constructor(private firestore: AngularFirestore) { }

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

  publish(highScore) {
    this.firestore.collection('flappyHighScore').add({
      'score': highScore,
      'name': localStorage.getItem('username'),
      'date': this.dateDATA.getFullYear() + '-' + (this.dateDATA.getMonth() + 1) + '-' + this.dateDATA.getDate(),
    })
      .then(
        res => {
          console.log('published');
        }
      ),
      err => {
        console.log(err);
      }
  };

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

    this.newPosForPipes = Math.floor((Math.random() * 30) + 10);
    //Line 2
    this.topPipe2++;
    this.bottomPipe2++;

    //Top pipe updater 
    if (this.topPipe2 == 100 || this.topPipe2 == 1) {
      this.topPipe2 = 1;
      document.getElementById('tp2').style.bottom = ((this.newPosForPipes + 10).toString() + '%');
    } else {
      document.getElementById('tp2').style.right = (this.topPipe2.toString() + '%');
    }
    2
    //Bottom pipe updater
    if (this.bottomPipe2 == 100 || this.bottomPipe2 == 1) {
      this.bottomPipe2 = 1;
      document.getElementById('bp2').style.height = (this.newPosForPipes.toString() + '%');
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
    let tp2Bottom: number = Number((document.getElementById('tp2').style.bottom).slice(0, -1));

    if (this.topPipe2 > 70 && this.topPipe2 < 90 && this.playerBottom > tp2Bottom) {
      console.log("line 2 top");
      this.playerLose();
    } else
      //Touch bottom pipe    
      if (this.bottomPipe2 > 70 && this.bottomPipe2 < 90 && this.playerBottom < tp2Bottom - 10) {
        console.log("line 2 bottom");
        this.playerLose();
      }
  }

  playerLose(): void {
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('flappyGameHighScore', this.score.toString());
      this.publish(this.highScore);
    }

    this.resetGame();
  }

  updateScore(): void {
    this.score++;
  }

  updatePlayer(): void {
    this.playerBottom = (this.playerBottom - 0.4);
    document.getElementById('player').style.bottom = (this.playerBottom.toString() + '%');
  }

  onScreenClick(): void {
    let newPos = this.playerBottom + 5;

    while (this.playerBottom < newPos) {
      this.playerBottom++;
    }
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
