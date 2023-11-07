import { TestBed } from '@angular/core/testing';

import { CareerFormService } from './career-form.service';

describe('CareerFormService', () => {
  let service: CareerFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
