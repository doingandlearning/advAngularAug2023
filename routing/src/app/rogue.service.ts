import { Injectable } from '@angular/core';

@Injectable()
export class RogueService {
  constructor() {}

  getData(): string {
    return 'Rogue Data!';
  }
}
