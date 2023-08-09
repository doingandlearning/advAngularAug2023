import { TestBed } from '@angular/core/testing';

import { SensitiveDataService } from './sensitive-data.service';

describe('SensitiveDataService', () => {
  let service: SensitiveDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensitiveDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
