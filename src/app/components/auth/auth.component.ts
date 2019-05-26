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
    });

    this.signInForm = this.fb.group({
      name: '',
      password: '',
    });
  }

  signIn(): void {
    this.service.signIn(this.signInForm.value.password).subscribe(items => {
      this.DATA = items.map(item => {
        return item.payload.doc.data()
      });
      console.log(this.DATA);
      if (this.DATA[0].password == this.signInForm.value.password) {
        localStorage.setItem('username', this.signInForm.value.name);
        localStorage.setItem('auth', 'true');
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