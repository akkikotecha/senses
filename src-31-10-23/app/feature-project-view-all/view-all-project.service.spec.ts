import { TestBed } from '@angular/core/testing';

import { ViewAllProjectService } from './view-all-project.service';

describe('ViewAllProjectService', () => {
  let service: ViewAllProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
