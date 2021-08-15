import { TestBed } from '@angular/core/testing';

import { AppCanActivateGuard } from './app-can-activate.guard';

describe('AppCanActivateGuard', () => {
  let guard: AppCanActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppCanActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
