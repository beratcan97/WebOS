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
  newUser = false;

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
      username: '',
      password: '',
      age: '',
      gender: '',
      wallpaper: '',
      auth: '',
      id: '',
      userCreated: this.dateDATA.getFullYear() + '-' + (this.dateDATA.getMonth() + 1) + '-' + this.dateDATA.getDate(),
      lastSignedIn: this.dateDATA.getFullYear() + '-' + (this.dateDATA.getMonth() + 1) + '-' + this.dateDATA.getDate(),
    });

    this.signInForm = this.fb.group({
      name: '',
      password: '',
    });
  }

  signIn(): void {
    let tmp;
    this.service.signIn(this.signInForm.value.password).subscribe(items => {
      this.DATA = items.map(item => {
        tmp = item.payload.doc.id;
        return item.payload.doc.data()
      });
      console.log(this.DATA);
      if (this.DATA[0].password == this.signInForm.value.password) {

        let user = {
          username: this.signInForm.value.name,
          password: this.signInForm.value.password,
          age: this.signInForm.value.age,
          gender: this.signInForm.value.gender,
          wallpaper: this.DATA[0].wallpaper,
          auth: 'true',
          id: tmp,
          userCreated: this.dateDATA.getFullYear() + '-' + (this.dateDATA.getMonth() + 1) + '-' + this.dateDATA.getDate(),
          lastSignedIn: this.dateDATA.getFullYear() + '-' + (this.dateDATA.getMonth() + 1) + '-' + this.dateDATA.getDate(),
        }
        localStorage.setItem('user', JSON.stringify(user));
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
          this.newUser = false;
          alert('Registered');
        }
      ),
      err => {
        console.log(err);
      }
  };
}