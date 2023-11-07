import { TestBed } from '@angular/core/testing';

import { InsightsServiceService } from './insights-service.service';

describe('InsightsServiceService', () => {
  let service: InsightsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsightsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
