import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cpm',
  templateUrl: './cpm.component.html',
  styleUrls: ['./cpm.component.css']
})
export class CpmComponent implements OnInit {

  lang = window.navigator.language;
  dateDATA = new Date();

  timeLeft: number = 10;
  clicks: number = 0;
  cpm: number = 0;
  highScore: number = parseInt(localStorage.getItem('cpmGameHighScore'));
  gameRunning: boolean = false;

  scoreBoard = [{
    'username': '',
    'score': 0
  }, {
    'username': '',
    'score': 0
  }, {
    'username': '',
    'score': 0
  }];
  DATA;

  constructor(private service: FirebaseService,
    private firestore: AngularFirestore) {
    if (!localStorage.getItem('cpmGameHighScore')) {
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
    this.service.getCpmHighScores().subscribe(items => {
      this.DATA = items.map(item => {
        return item.payload.doc.data()
      });

      this.DATA.forEach(score => {
        if (score.score > this.scoreBoard[0].score) {
          this.scoreBoard[2] = this.scoreBoard[1];
          this.scoreBoard[1] = this.scoreBoard[0];
          this.scoreBoard[0] = score;
        } else if (score.score > this.scoreBoard[1].score) {
          this.scoreBoard[2] = this.scoreBoard[1];
          this.scoreBoard[1] = score;
        } else if (score.score > this.scoreBoard[2].score) {
          this.scoreBoard[2] = score;
        }
      });
    });
  }

  prevent(event) {
    event.preventDefault();
  }

  clickCounter() {
    this.clicks++;
  }

  cpmCounter() {
    this.cpm = (this.clicks * 6);
    if (this.cpm > this.highScore) {
      localStorage.setItem('cpmGameHighScore', this.cpm.toString());
      this.highScore = this.cpm;
      this.publish(this.cpm);
    }
  }

  publish(highScore) {
    this.firestore.collection('cpmHighScore').add({
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

  restartGame() {
    this.gameRunning = true;
    this.clicks = 0;
    this.timeLeft = 10;
  }
}
