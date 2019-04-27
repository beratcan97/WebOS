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

    var textarea = document.querySelector('textarea');

    textarea.addEventListener('keydown', autosize);

    if (localStorage.getItem('note')) {
      this.notesForm.get('notes').patchValue(localStorage.getItem('note'));
    }
  }

  saveNote() {
    localStorage.setItem('note', this.notesForm.value.notes);
  }
}


function autosize() {
  var el = this;
  setTimeout(function () {
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
}