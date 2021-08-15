import { TestBed } from '@angular/core/testing';

import { ResolverDataResolver } from './resolver-data.resolver';

describe('ResolverDataResolver', () => {
  let resolver: ResolverDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ResolverDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
