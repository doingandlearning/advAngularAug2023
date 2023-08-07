import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });

    service = TestBed.inject(CalculatorService);
  });

  it('should add two numbers', () => {
    // Arrange

    // Act
    const result = service.add(1, 2);

    // Assert
    expect(result).toBe(3);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    // Arrange

    // Act
    const result = service.subtract(1, 2);

    // Assert
    expect(result).toBe(-1);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
