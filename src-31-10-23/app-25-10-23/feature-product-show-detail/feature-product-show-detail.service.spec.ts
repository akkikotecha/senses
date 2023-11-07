import { TestBed } from '@angular/core/testing';

import { FeatureProductShowDetailService } from './feature-product-show-detail.service';

describe('FeatureProductShowDetailService', () => {
  let service: FeatureProductShowDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureProductShowDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
