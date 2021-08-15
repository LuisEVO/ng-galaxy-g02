import { TestBed } from '@angular/core/testing';

import { AppCanLoadGuard } from './app-can-load.guard';

describe('AppCanLoadGuard', () => {
  let guard: AppCanLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppCanLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
