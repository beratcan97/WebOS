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

  tubeUpdate() {
    if (this.bottomPipe == 100) {
      this.bottomPipe = 1;
    } else {
      this.bottomPipe++;
      document.getElementById('bp1').style.right = (this.bottomPipe.toString() + '%');
    }
  }

  updatePlayer() {
    this.playerBottom--;
    document.getElementById('player').style.bottom = (this.playerBottom.toString() + '%');
  }

  onScreenClick() {
    this.playerBottom = this.playerBottom + 5;
    document.getElementById('player').style.bottom = (this.playerBottom.toString() + '%');
  }
}
