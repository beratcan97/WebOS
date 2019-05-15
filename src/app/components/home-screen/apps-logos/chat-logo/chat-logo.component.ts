import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-logo',
  templateUrl: './chat-logo.component.html',
  styleUrls: ['./chat-logo.component.css']
})
export class ChatLogoComponent implements OnInit {

  constructor(private router: Router) { }

  lang = window.navigator.language;

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/chat']);
  }
}
