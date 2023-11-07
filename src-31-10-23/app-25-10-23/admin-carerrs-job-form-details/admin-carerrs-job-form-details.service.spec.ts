import { TestBed } from '@angular/core/testing';

import { AdminCarerrsJobFormDetailsService } from './admin-carerrs-job-form-details.service';

describe('AdminCarerrsJobFormDetailsService', () => {
  let service: AdminCarerrsJobFormDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCarerrsJobFormDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
