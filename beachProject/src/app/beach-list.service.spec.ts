import { TestBed } from '@angular/core/testing';

import { BeachListService } from './beach-list.service';

describe('BeachListService', () => {
  let service: BeachListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeachListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
