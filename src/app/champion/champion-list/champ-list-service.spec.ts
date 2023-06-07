import { TestBed } from '@angular/core/testing';

import { ChampListServiceService } from './champ-list-service';

describe('ChampListServiceService', () => {
  let service: ChampListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
