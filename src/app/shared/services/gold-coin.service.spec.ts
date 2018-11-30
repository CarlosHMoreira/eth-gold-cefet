import { TestBed } from '@angular/core/testing';

import { GoldCoinService } from './gold-coin.service';

describe('GoldCoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoldCoinService = TestBed.get(GoldCoinService);
    expect(service).toBeTruthy();
  });
});
