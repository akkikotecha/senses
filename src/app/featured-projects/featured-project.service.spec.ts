import { TestBed } from '@angular/core/testing';

import { FeaturedProjectService } from './featured-project.service';

describe('FeaturedProjectService', () => {
  let service: FeaturedProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
