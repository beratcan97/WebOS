import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../../../../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent implements OnInit {

  currentColor = localStorage.getItem('wallpaper');
  colors = ['blueviolet', 'lightslategrey', 'yellowgreen', 'lightskyblue', 'lightcoral', 'lightpink', 'lightseagreen'];
  dateDATA = new Date();

  constructor(private router: Router,
    private service: FirebaseService,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    setTimeout(any => {
      this.colors.forEach(color => {
        document.getElementById(color + 'id').style.color = color;
      });
    }, 1);
  }

  onSubmit(color) {
    localStorage.setItem('wallpaper', color);

    const user = {
      name: localStorage.getItem('username'),
      password: 'qqq',
      wallpaper: color,
      CPMHighScore: localStorage.getItem('CPMHighScore'),
      flappyHighScore: localStorage.getItem('flappyHighScore'),
      lastSignedIn: this.dateDATA.getFullYear() + '-' + (this.dateDATA.getMonth() + 1) + '-' + this.dateDATA.getDate(),
    };

    this.service.updateUser(user)
      .then(
        res => {
          this.router.navigate(['']);
        }
      )
  }
}
