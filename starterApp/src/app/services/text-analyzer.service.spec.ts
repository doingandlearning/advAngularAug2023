import { TestBed } from '@angular/core/testing';

import { TextAnalyzerService } from './text-analyzer.service';

describe('TextAnalyzerService', () => {
  let service: TextAnalyzerService;
  let loggerSpy: any;
  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        TextAnalyzerService,
        { provide: 'LoggerService', useValue: loggerSpy },
      ],
    });
    service = TestBed.inject(TextAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should work correctly', () => {
    // Arrange
    const testText = 'This is some test text.'; // 5 words & 23 characters

    // Act
    const result = service.analyzeText(testText);

    // Assert
    expect(result.characterCount).toBe(23);
    expect(result.wordCount).toBe(5);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1); // Why???
  });
});
