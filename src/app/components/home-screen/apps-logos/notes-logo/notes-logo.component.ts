import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-logo',
  templateUrl: './notes-logo.component.html',
  styleUrls: ['./notes-logo.component.css']
})
export class NotesLogoComponent implements OnInit {

  lang = window.navigator.language;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/notes']);
  }
}