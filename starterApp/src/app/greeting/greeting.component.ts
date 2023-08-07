import { Component } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
})
export class GreetingComponent {
  name = 'Renuka';
  location = 'Chenai';
  isDisabled = true;
  num1: number = 0;
  num2: number = 0;
  result = 0;

  constructor(private calculator: CalculatorService) {}

  handleClick() {
    console.log('Clicked!');
  }

  handleAdd() {
    // this.num1 = parseInt(this.num1);
    // this.num2 = parseInt(this.num2);

    this.result = this.calculator.add(this.num1, this.num2);
  }

  handleSubtract() {
    this.result = this.calculator.subtract(this.num1, this.num2);
  }

  handleUpdate(event: any) {
    console.log(event.target.value);
    this.name = event.target.value;
  }
}
