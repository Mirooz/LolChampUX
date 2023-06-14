import { TestBed } from '@angular/core/testing';

import { ChampListService } from './champ-list-service';

describe('ChampListServiceService', () => {
  let service: ChampListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
