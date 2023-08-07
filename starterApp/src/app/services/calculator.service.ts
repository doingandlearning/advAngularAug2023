import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class CalculatorService {
  constructor(private logger: LoggerService) {}

  add(n1: number, n2: number) {
    this.logger.log('Addition operation called!');
    return n1 + n2;
  }

  subtract(n1: number, n2: number) {
    this.logger.log('Subtraction operation called!');
    return n1 - n2;
  }
  multiply(n1: number, n2: number) {
    this.logger.log('Multiply operation called!');
    return n1 * n2;
  }
  divide(n1: number, n2: number) {
    this.logger.log('Divide operation called!');
    return n1 / n2;
  }
}
