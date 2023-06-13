  import { Injectable } from '@angular/core';
  import { InMemoryDbService } from 'angular-in-memory-web-api';
  import { CHAMPIONS } from './champions-MOKS';
import { STATS_MOCKS } from './stats-MOKS';
import { MOCK_SPELLS } from './spells-MOKS';

  @Injectable({
    providedIn: 'root'
  })
  export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const champions = CHAMPIONS;
        const stats = STATS_MOCKS;
        const spells = MOCK_SPELLS;
        return { champions, stats , spells};
    }
  }
