import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

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