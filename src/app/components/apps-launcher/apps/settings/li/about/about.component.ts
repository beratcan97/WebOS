import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../../../../../../services/firebase.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  lang = window.navigator.language;

  DATA;

  constructor(
    private firestore: AngularFirestore,
    private service: FirebaseService) { }

  ngOnInit() {
    this.service.gethighScores().subscribe(items => {
      this.DATA = items.map(item => {
        console.log(item.payload.doc.id);
        return item.payload.doc.data()
      })
    });
  }
}