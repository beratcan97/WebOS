import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../../../services/firebase.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flappy-high-score',
  templateUrl: './flappy-high-score.component.html',
  styleUrls: ['./flappy-high-score.component.css']
})
export class FlappyHighScoreComponent implements OnInit {

  lang = window.navigator.language;

  nameForm: FormGroup;
  username: string = localStorage.getItem('username');
  usernameExist = false;
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

  constructor(
    private service: FirebaseService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    if (this.username) {
      this.usernameExist = true;
    }

    this.service.gethighScores().subscribe(items => {
      this.DATA = items.map(item => {
        return item.payload.doc.data()
      });

      this.DATA.forEach(score => {
        if (score.score > this.scoreBoard[0].score) {
          // This order of assignment is important
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
    localStorage.setItem('flappyBirdGlobalHighScore', this.scoreBoard[0].score.toString());
    this.createForm();
  }

  createForm(): void {
    this.nameForm = this.fb.group({
      name: '',
    })
  }

  saveName(): void {
    localStorage.setItem('username', this.nameForm.value.name);
    this.navigate();
  }

  navigate(): void {
    this.router.navigate(['/flappy']);
  }
}