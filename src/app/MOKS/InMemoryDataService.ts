  import { Injectable } from '@angular/core';
  import { InMemoryDbService } from 'angular-in-memory-web-api';
  import { CHAMPIONS } from './champions-MOKS';
import { STATS_MOCKS } from './stats-MOKS';

  @Injectable({
    providedIn: 'root'
  })
  export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const champions = CHAMPIONS;
        const stats = STATS_MOCKS;
        return { champions, stats };
    }
  }
