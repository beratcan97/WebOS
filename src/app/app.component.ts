import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebOS';
  isInstalled: boolean = false;
  isLoaded: boolean = false;

  ngOnInit() {

    if (window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalled = true;
      // do things here  
      // set a variable to be used when calling something  
      // e.g. call Google Analytics to track standalone use   
    }


    this.delay(3000).then(any => {
      this.isLoaded = true;
    });
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
