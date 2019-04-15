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
  playerJumps = false;

  //pipe
  bottomPipe = 1;

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.tubeCreate();
    }, 100)
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  tubeCreate() {
    this.bottomPipe++;
    document.getElementById('bp1').style.right = (this.bottomPipe.toString() + 'vh');
  }

  onScreenClick() {
    this.playerJumps = true;
    this.delay(250).then(any => {
      this.playerJumps = false;
    });
  }

  restartGame() {
    this.gameRunning = true;
  }
}
