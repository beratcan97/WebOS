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


  constructor() {
  }

  ngOnInit() {

  }
  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onScreenClick() {
    this.playerJumps = true;
    this.delay(500).then(any => {
      this.playerJumps = false;
    });
  }

  restartGame() {
    this.gameRunning = true;
  }
}
