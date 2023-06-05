import { Injectable } from '@angular/core';
import { CHAMPIONS } from '../../champions-MOKS';
import { Champion } from '../../champion';

@Injectable({
  providedIn: 'root'
})
export class ChampListServiceService {

  constructor() { }

  //API
  getListChampions(): Champion[] {
    const championList: Champion[] = CHAMPIONS;
    return championList;
  }
}
