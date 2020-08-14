import { TestBed } from '@angular/core/testing';

import { BlogResolverService } from './blog-resolver.service';

describe('BlogResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogResolverService = TestBed.get(BlogResolverService);
    expect(service).toBeTruthy();
  });
});
