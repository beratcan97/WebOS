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

  //Block rubber banding
  BlockElasticScroll(event) {
    event.preventDefault();
  }

}
