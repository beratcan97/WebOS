import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent implements OnInit {

  currentColor = localStorage.getItem('wallpaper');
  colors = ['blueviolet', 'lightslategrey', 'yellowgreen', 'lightskyblue', 'lightcoral', 'lightpink', 'lightseagreen'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  localStorage(color) {
    localStorage.setItem('wallpaper', color);
    this.router.navigate(['']);
  }
}
