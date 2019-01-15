import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNumber = "";
  secondNumber = "";
  function = "";
  screenNumber = "";
  infoScreenNumber = "";

  constructor() { }

  ngOnInit() {
  }

  addNumber(number): void {
    if (this.function) {
      this.secondNumber = (this.secondNumber + number);
      this.screenNumber = this.secondNumber;
    } else {
      this.firstNumber = (this.firstNumber + number);
      this.screenNumber = this.firstNumber;
    }
  }

  plus = () => {
    this.function = "+";
    this.screenNumber = "+";
  }

  minus = () => {
    this.function = "-";
    this.screenNumber = "-";
  }

  divide = () => {
    this.function = "/";
    this.screenNumber = "/";
  }

  multiply = () => {
    this.function = "*";
    this.screenNumber = "*";
  }


  equals() {
    this.infoScreenNumber = (this.firstNumber + " " + this.function + " " + this.secondNumber);

    if (this.function === "+") {
      let tmp = parseInt(this.firstNumber) + parseInt(this.secondNumber)
      this.screenNumber = tmp.toString();
    } else if (this.function === "-") {
      let tmp = parseInt(this.firstNumber) - parseInt(this.secondNumber);
      this.screenNumber = tmp.toString();
    } else if (this.function === "/") {
      let tmp = parseInt(this.firstNumber) / parseInt(this.secondNumber);
      this.screenNumber = tmp.toString();
    } else if (this.function === "*") {
      let tmp = parseInt(this.firstNumber) * parseInt(this.secondNumber);
      this.screenNumber = tmp.toString();
    }
  }

  reset() {
    this.firstNumber = "";
    this.secondNumber = "";
    this.function = "";
    this.screenNumber = "";
    this.infoScreenNumber = "";
  }
}
