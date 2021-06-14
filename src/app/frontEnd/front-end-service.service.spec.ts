import { TestBed } from '@angular/core/testing';

import { FrontEndServiceService } from './front-end-service.service';

describe('FrontEndServiceService', () => {
  let service: FrontEndServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontEndServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
