import { TestBed } from '@angular/core/testing';

import { AdminLoginServiceService } from './admin-login-service.service';

describe('AdminLoginServiceService', () => {
  let service: AdminLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
