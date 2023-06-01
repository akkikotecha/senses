import { TestBed } from '@angular/core/testing';

import { ProductDetailShowService } from './product-detail-show.service';

describe('ProductDetailShowService', () => {
  let service: ProductDetailShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
