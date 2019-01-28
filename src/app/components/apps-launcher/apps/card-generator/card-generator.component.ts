import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-generator',
  templateUrl: './card-generator.component.html',
  styleUrls: ['./card-generator.component.css']
})
export class CardGeneratorComponent implements OnInit {

  lang = window.navigator.language;
  isLoaded: boolean = false;

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

    let validCard: boolean = false;
    let generatedCardNumber: number;

    while (!validCard) {
      generatedCardNumber = Math.floor((Math.random() * 9999999999999999) + 1000000000000000);

      if (this.checkCard(generatedCardNumber) == true) {
        validCard = true;
      }
    }

    this.cardNumber = generatedCardNumber;
  }

  checkCard(generatedCardNumber) {
    let sum = 0;
    for (var i = 0; i < generatedCardNumber.length; i++) {
      var intVal = parseInt(generatedCardNumber.substr(i, 1));
      if (i % 2 == 0) {
        intVal *= 2;
        if (intVal > 9) {
          intVal = 1 + (intVal % 10);
        }
      }
      sum += intVal;
    }
    return (sum % 10) == 0;
  }
}
