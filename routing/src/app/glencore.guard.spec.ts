import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { glencoreGuard } from './glencore.guard';

describe('glencoreGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => glencoreGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
