import { TestBed } from '@angular/core/testing';

import { StocksApiService } from './stocks-api.service';

describe('StocksApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StocksApiService = TestBed.get(StocksApiService);
    expect(service).toBeTruthy();
  });
});
