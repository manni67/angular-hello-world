import { TestBed } from '@angular/core/testing';

import { GreetingDataService } from './greeting-data.service';

describe('GreetingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GreetingDataService = TestBed.get(GreetingDataService);
    expect(service).toBeTruthy();
  });
});
