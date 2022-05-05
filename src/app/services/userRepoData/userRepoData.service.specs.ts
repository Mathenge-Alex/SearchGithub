import { TestBed } from '@angular/core/testing';

import { UsrepodataService } from './userRepoData.service';

describe('UsrepodataService', () => {
  let service: UsrepodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsrepodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
