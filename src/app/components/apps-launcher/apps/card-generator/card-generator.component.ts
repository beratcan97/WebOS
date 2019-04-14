import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-generator',
  templateUrl: './card-generator.component.html',
  styleUrls: ['./card-generator.component.css']
})
export class CardGeneratorComponent implements OnInit {

  lang = window.navigator.language;
  isLoaded: boolean = false;

  masterCards = [5226437592277603, 5329412398350272, 5576699369446382, 5499825907071549, 5572311002733002, 5412933130618658, 5252016241379734, 5186504395771567, 5408155025300350, 5101608596193455];

  cardNumber: number;

  constructor() { }

  ngOnInit() {
    this.delay(3000).then(any => {
      this.isLoaded = true;
    });

    this.generateCard();
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  generateCard(): void {

  this.cardNumber = this.masterCards[Math.floor(Math.random() * 11)];
  }
}
