import { TestBed } from '@angular/core/testing';

import { RogueService } from './rogue.service';

describe('RogueService', () => {
  let service: RogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
