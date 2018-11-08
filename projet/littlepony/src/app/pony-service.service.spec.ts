import { TestBed } from '@angular/core/testing';

import { PonyServiceService } from './pony-service.service';

describe('PonyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PonyServiceService = TestBed.get(PonyServiceService);
    expect(service).toBeTruthy();
  });
});
