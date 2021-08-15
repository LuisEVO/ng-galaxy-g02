import { TestBed } from '@angular/core/testing';

import { AppCanDeactivateGuard } from './app-can-deactivate.guard';

describe('AppCanDeactivateGuard', () => {
  let guard: AppCanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppCanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
