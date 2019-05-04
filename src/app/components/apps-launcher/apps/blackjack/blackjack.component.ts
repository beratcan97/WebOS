import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {

  //Cards
  cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52'];
  dealerCards = [];
  playerCards = [];

  playerValue: number = 0;
  dealerValue: number = 0;
  constructor() { }

  ngOnInit() {
    this.startNewGame();
    this.gameupdater();
  }

  gameupdater(): void {
    this.playerAndDealerCardsValueCount();
    this.checkBlackjackAndBust();
  }

  stand(): void {
    this.checkTheWinner();
  }

  checkTheWinner(): void {
    if (this.playerValue === this.dealerValue) {
      alert('same');
      this.restartGame();
    } else if (this.playerValue > this.dealerValue) {
      alert('playerWins');
      this.restartGame();
    } else {
      alert('DealerWins');
      this.restartGame();
    }
  }

  restartGame(): void {
    this.cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52'];
    this.dealerCards = [];
    this.playerCards = [];

    this.playerValue = 0;
    this.dealerValue = 0;

    this.startNewGame();
    this.gameupdater();
  }

  checkBlackjackAndBust(): void {
    //Check player
    if (this.playerValue == 21) {
      alert('blackJack');
      this.restartGame();
    } else if (this.playerValue > 21) {
      alert('bust');
      this.restartGame();
    }

    //Check dealer
    if (this.dealerValue == 21) {
      alert('Dealer blackJack');
      this.restartGame();
    } else if (this.dealerValue > 21) {
      alert('Dealer bust');
      this.restartGame();
    }
  }

  playerAndDealerCardsValueCount(): void {
    let tmpPlayer: number = 0;
    this.playerCards.forEach(card => {
      tmpPlayer = (tmpPlayer + this.cardsValueCounter(card));
    });
    this.playerValue = tmpPlayer;

    let tmpDealer: number = 0;
    this.dealerCards.forEach(card => {
      tmpDealer = (tmpDealer + this.cardsValueCounter(card));
    });
    this.dealerValue = tmpDealer;
  }

  cardsValueCounter(index: number): number {
    let toatelValue: number = 0;
    if (index >= 1 && index <= 4) {
      toatelValue = toatelValue + 2;
    } else if (index >= 5 && index <= 8) {
      toatelValue = toatelValue + 3;
    } else if (index >= 9 && index <= 12) {
      toatelValue = toatelValue + 4;
    } else if (index >= 13 && index <= 16) {
      toatelValue = toatelValue + 5;
    } else if (index >= 17 && index <= 20) {
      toatelValue = toatelValue + 6;
    } else if (index >= 21 && index <= 24) {
      toatelValue = toatelValue + 7;
    } else if (index >= 25 && index <= 28) {
      toatelValue = toatelValue + 8;
    } else if (index >= 29 && index <= 32) {
      toatelValue = toatelValue + 9;
    } else if (index >= 33 && index <= 48) {
      toatelValue = toatelValue + 10;
    } else {
      //A
      toatelValue = toatelValue + 1;
    }

    return toatelValue;
  }

  hit(): void {
    this.playerCards.push(this.randomCard(1)[0]);

    this.gameupdater();
  }

  startNewGame(): void {
    this.dealerCards = this.randomCard(2);
    this.playerCards = this.randomCard(2);
  }

  randomCard(number) {
    let randomCards = [];
    for (let i = 0; i < number; i++) {

      let cardIndex = Math.floor(Math.random() * this.cards.length);

      randomCards.push(this.cards[cardIndex]);
      this.cards.splice(cardIndex, 1);
    }
    return randomCards;
  }
}
