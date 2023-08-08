import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class TextAnalyzerService {
  constructor(private logger: LoggerService) {}

  analyzeText(text: string): { wordCount: number; characterCount: number } {
    const trimmedText = text.trim();
    const wordCount =
      trimmedText.length > 0 ? trimmedText.split(/\s+/).length : 0;
    const characterCount = trimmedText.length;

    this.logger.log(
      `Analyzed text. Word Count: ${wordCount}, Character Count: ${characterCount}`
    );
    return { wordCount, characterCount };
  }
}
