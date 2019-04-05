import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  lang = window.navigator.language;
  notesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.notesForm = this.fb.group({
      notes: '',
    })


    if (localStorage.getItem('note')) {
      this.notesForm.get('notes').patchValue(localStorage.getItem('note'));
    }
  }

  saveNote() {
    localStorage.setItem('note', this.notesForm.value.notes);
  }
}