import { TestBed } from '@angular/core/testing';

import { AdminresourcetypeService } from './adminresourcetype.service';

describe('AdminresourcetypeService', () => {
  let service: AdminresourcetypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminresourcetypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
