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
  orderBy(value) {
    return this.firestore.collection('advertisement', ref =>
      ref
        .orderBy(value)
        .limit(10)).snapshotChanges();
  }
  search(searchValue, orderByValue) {
    return this.firestore.collection('advertisement', ref =>
      ref
        .orderBy(orderByValue)
        .startAt(searchValue)
        .endAt(searchValue)
        .limit(10)).snapshotChanges();
  }
}