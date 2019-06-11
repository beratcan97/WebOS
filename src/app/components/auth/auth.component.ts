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
      birthdate: '',
      gender: '',
      wallpaper: '',
      auth: '',
      id: '',
      userCreated: this.dateDATA.getFullYear() + '-' + (this.dateDATA.getMonth() + 1) + '-' + this.dateDATA.getDate(),
      lastSignedIn: '',
      cash: '0',
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
      if (this.DATA.length) {
        if (this.DATA[0].password == this.signInForm.value.password && this.DATA[0].username == this.signInForm.value.name) {
          let user = {
            username: this.DATA[0].username,
            password: this.DATA[0].password,
            birthdate: this.DATA[0].birthdate,
            gender: this.DATA[0].gender,
            wallpaper: this.DATA[0].wallpaper,
            auth: 'true',
            id: tmp,
            userCreated: this.DATA[0].userCreated,
            lastSignedIn: this.dateDATA.getFullYear() + '-' + (this.dateDATA.getMonth() + 1) + '-' + this.dateDATA.getDate(),
            cash: this.DATA[0].cash,
          }
          localStorage.setItem('user', JSON.stringify(user));
          this.service.updateUser(user)
          .then(
            res => {
              this.router.navigate(['']);
            }
          ),
          err => {
            console.log(err);
          }
        } else {
          alert('Wrong username');
        }
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
          this.resetForms();
        }
      ),
      err => {
        console.log(err);
      }
  };

  resetForms() {
    this.registerForm.reset();
    this.signInForm.reset();
  }
}