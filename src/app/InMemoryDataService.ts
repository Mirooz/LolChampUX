  import { Injectable } from '@angular/core';
  import { InMemoryDbService } from 'angular-in-memory-web-api';
  import { CHAMPIONS } from './champions-MOKS';

  @Injectable({
    providedIn: 'root'
  })
  export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const champions = CHAMPIONS;
        return { champions };
    }
  }
