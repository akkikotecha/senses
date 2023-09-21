import { TestBed } from '@angular/core/testing';

import { AdminBlogNewsService } from './admin-blog-news.service';

describe('AdminBlogNewsService', () => {
  let service: AdminBlogNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBlogNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
