import { TestBed } from '@angular/core/testing';

import { AdminResouceService } from './admin-resouce.service';

describe('AdminResouceService', () => {
  let service: AdminResouceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminResouceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
