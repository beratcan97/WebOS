import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  currentColor = JSON.parse(localStorage.getItem('user')).wallpaper;

  constructor() { }

  ngOnInit() {
    console.log('--------');
    console.log(JSON.parse(localStorage.getItem('user')));
  }

  rightColorFinder(testColor): boolean {
    if (this.currentColor === testColor) {
      return true;
    } else {
      return false;
    }
  }
}
