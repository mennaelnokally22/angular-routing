import { TestBed } from '@angular/core/testing';

import { FollowersBlogsService } from './followers-blogs.service';

describe('FollowersBlogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowersBlogsService = TestBed.get(FollowersBlogsService);
    expect(service).toBeTruthy();
  });
});
