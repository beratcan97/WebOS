import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chatForm: FormGroup;
  DATA;
  dateDATA = new Date();

  constructor(private fb: FormBuilder,
    private service: FirebaseService,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.getChats();
    this.createForm();
  }

  createForm(): void {
    this.chatForm = this.fb.group({
      chat: '',
    })
  }

  resetForm() {
    this.chatForm.patchValue({
      chat: '',
    });
  }

  getChats() {
    this.service.getChats().subscribe(chats => {
      this.DATA = chats.map(chat => {
        return chat.payload.doc.data()
      });
    });
  }

  sendChat() {
    this.firestore.collection('chat').add({
      'name': localStorage.getItem('username'),
      'chat': this.chatForm.value.chat,
      'date': new Date(),
      'readDate': this.dateDATA.getFullYear() + '-' + (this.dateDATA.getMonth() + 1) + '-' + this.dateDATA.getDate(),
    })
      .then(
        res => {
          this.resetForm();
          this.getChats();
          console.log('published');
        }
      ),
      err => {
        console.log(err);
      }
  }
}
