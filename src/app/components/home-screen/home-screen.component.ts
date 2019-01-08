import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  device: string = "";

  constructor() { }

  ngOnInit() {

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      this.device = "phone";
    }
    else {
      this.device = "desktop";
    }
  }

  //Block rubber banding
  BlockElasticScroll(event) {
    event.preventDefault();
  }

}
