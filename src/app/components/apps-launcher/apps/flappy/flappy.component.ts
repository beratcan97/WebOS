import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flappy',
  templateUrl: './flappy.component.html',
  styleUrls: ['./flappy.component.css']
})
export class FlappyComponent implements OnInit {

  lang = window.navigator.language;
  gameRunning: boolean = true;


  //Player
  playerBottom = 50;

  //pipe
  bottomPipe = 1;

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.tubeUpdate();
      this.updatePlayer();
    }, 100)
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  tubeUpdate(): void {
    this.bottomPipe++;
    this.checkCrash(this.bottomPipe);

    if (this.bottomPipe == 100) {
      this.bottomPipe = 1;
    } else {
      document.getElementById('bp1').style.right = (this.bottomPipe.toString() + '%');
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

  checkCrash(bp): void {
    if (bp > 70 && bp < 90 && this.playerBottom < 20) {
      alert('You lose');
      this.resetGame();
    }
  }

  resetGame() {
    //Player
    this.playerBottom = 50;

    //pipe
    this.bottomPipe = 1;
  }
}
