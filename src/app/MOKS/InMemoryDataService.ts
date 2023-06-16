  import { Injectable } from '@angular/core';
  import { InMemoryDbService } from 'angular-in-memory-web-api';
import { STATS_MOCKS } from './stats-MOKS';
import { MOCK_SPELLS } from './spells-MOKS';

  @Injectable({
    providedIn: 'root'
  })
  export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const stats = STATS_MOCKS;
        const spells = MOCK_SPELLS;
        return {  stats , spells};
    }
  }
