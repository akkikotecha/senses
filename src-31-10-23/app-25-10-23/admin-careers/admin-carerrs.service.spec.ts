import { TestBed } from '@angular/core/testing';

import { AdminCarerrsService } from './admin-carerrs.service';

describe('AdminCarerrsService', () => {
  let service: AdminCarerrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCarerrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
