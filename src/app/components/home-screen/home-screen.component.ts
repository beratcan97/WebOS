import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  currentColor = localStorage.getItem('wallpaper');

  constructor() { }

  ngOnInit() {
  }

  rightColorFinder(testColor): boolean {
    if (this.currentColor === testColor) {
      return true;
    } else {
      return false;
    }
  }
}
