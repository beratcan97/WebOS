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

  nameForm: FormGroup;
  username: string = localStorage.getItem('username');
  usernameExist = false;
  scoreBoard = [];
  DATA

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