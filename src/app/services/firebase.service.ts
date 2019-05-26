import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  signIn(password) {
    return this.firestore.collection('users', ref =>
      ref.where('password', '==', password)).snapshotChanges();
  }

  gethighScores() {
    return this.firestore.collection('flappyHighScore', ref =>
      ref
        .orderBy('score')).snapshotChanges();
  }

  getCpmHighScores() {
    return this.firestore.collection('cpmHighScore', ref =>
      ref
        .orderBy('score')).snapshotChanges();
  }

  getChats() {
    return this.firestore.collection('chat', ref =>
      ref
        .orderBy('date')).snapshotChanges();
  }
}