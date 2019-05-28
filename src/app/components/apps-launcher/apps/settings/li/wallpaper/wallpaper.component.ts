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
    let user = JSON.parse(localStorage.getItem('user'));
    user.wallpaper = color;
    let newUser = JSON.stringify(user);
    console.log(user);
    console.log(newUser);
    this.service.updateUser(user)
      .then(
        res => {
          this.router.navigate(['']);
        }
      )
  }
}
