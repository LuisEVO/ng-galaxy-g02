import { TestBed } from '@angular/core/testing';

import { AppCanActivateChildGuard } from './app-can-activate-child.guard';

describe('AppCanActivateChildGuard', () => {
  let guard: AppCanActivateChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppCanActivateChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
