import { TestBed } from '@angular/core/testing';

import { BlogAndNewsShowDetailsService } from './blog-and-news-show-details.service';

describe('BlogAndNewsShowDetailsService', () => {
  let service: BlogAndNewsShowDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogAndNewsShowDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
