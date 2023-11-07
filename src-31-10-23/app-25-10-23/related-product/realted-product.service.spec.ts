import { TestBed } from '@angular/core/testing';

import { RealtedProductService } from './realted-product.service';

describe('RealtedProductService', () => {
  let service: RealtedProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtedProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
