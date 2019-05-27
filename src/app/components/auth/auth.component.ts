import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  registerForm: FormGroup;
  signInForm: FormGroup;
  DATA;

  dateDATA = new Date();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: FirebaseService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.registerForm = this.fb.group({
      name: '',
      password: '',
      wallpaper: '',
      CPMHighScore: '',
      flappyHighScore: '',
      lastSignedIn: this.dateDATA.getFullYear() + '-' + (this.dateDATA.getMonth() + 1) + '-' + this.dateDATA.getDate(),
    });

    this.signInForm = this.fb.group({
      name: '',
      password: '',
    });
  }

  signIn(): void {
    this.service.signIn(this.signInForm.value.password).subscribe(items => {
      this.DATA = items.map(item => {
        localStorage.setItem('id', item.payload.doc.id);
        return item.payload.doc.data()
      });
      console.log(this.DATA);
      if (this.DATA[0].password == this.signInForm.value.password) {
        localStorage.setItem('username', this.signInForm.value.name);
        localStorage.setItem('password', this.signInForm.value.password);
        localStorage.setItem('CPMHighScore', '');
        localStorage.setItem('flappyHighScore', '');
        localStorage.setItem('wallpaper', '');
        localStorage.setItem('auth', 'true');
        console.log(this.DATA.key);
        this.router.navigate(['']);
      } else {
        alert('Wrong password');
      }
    });
  }

  register(): void {
    this.firestore.collection('users').add(this.registerForm.value)
      .then(
        res => {
          this.router.navigate(['']);
        }
      ),
      err => {
        console.log(err);
      }
  };
}