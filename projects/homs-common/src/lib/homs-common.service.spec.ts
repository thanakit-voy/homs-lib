import { TestBed } from '@angular/core/testing';

import { HomsCommonService } from './homs-common.service';

describe('HomsCommonService', () => {
  let service: HomsCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomsCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
