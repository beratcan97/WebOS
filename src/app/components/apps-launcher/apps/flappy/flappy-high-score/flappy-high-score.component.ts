import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../../../../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flappy-high-score',
  templateUrl: './flappy-high-score.component.html',
  styleUrls: ['./flappy-high-score.component.css']
})
export class FlappyHighScoreComponent implements OnInit {

  scoreBoard = [];
  DATA

  constructor(
    private firestore: AngularFirestore,
    private service: FirebaseService,
    private router: Router) { }

  ngOnInit() {
    this.service.gethighScores().subscribe(items => {
      this.DATA = items.map(item => {
        return item.payload.doc.data()
      });

      let tmp = {
        'score': 0
      };
      this.DATA.forEach(score => {
        if (score.score > tmp.score) {
          tmp = score;
        }
      });
      this.scoreBoard.push(tmp);
    });
  }

  navigate(): void {
    this.router.navigate(['/flappy']);
  }
}