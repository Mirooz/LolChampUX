import { Injectable } from '@angular/core';
import { Champion } from '../model/champion';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Stats } from '../model/stats';
import { Spells } from '../model/spells';

@Injectable({
  providedIn: 'root'
})
export class ChampListService {

  searchQuery: string = '';
// MOCK
  //api : string = 'api'

  api : string = 'https://lousy-basin-production.up.railway.app';
  constructor(private http: HttpClient) {}

  //API
  getListChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(`${this.api}/champions`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  getChampion(id : string): Observable<Champion|undefined> {
    return this.http.get<Champion>(`${this.api}/champions/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }
  getSpellsByChamp(championid : string) : Observable<Spells[]> {
    return this.http.get<Spells[]>(`${this.api}/spells?championName=${championid}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  getStatForChamp(championid : string) : Observable<Stats|undefined> {
    return this.http.get<Stats[]>(`${this.api}/stats?championid=${championid}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  private log(response: any) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
  setSearchQuery(searchQuery : string) : void {
    this.searchQuery = searchQuery;
  }
  getSearchQuery() : string {
    return this.searchQuery;
  }
}
