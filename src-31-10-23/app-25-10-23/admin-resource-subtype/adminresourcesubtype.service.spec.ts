import { TestBed } from '@angular/core/testing';

import { AdminresourcesubtypeService } from './adminresourcesubtype.service';

describe('AdminresourcesubtypeService', () => {
  let service: AdminresourcesubtypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminresourcesubtypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
