import { Injectable } from '@angular/core';
import { CHAMPIONS } from '../../champions-MOKS';
import { Champion } from '../champion';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampListServiceService {

  searchQuery: string = '';
  constructor(private http: HttpClient) {}

  //API
  getListChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>('api/champions').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  getChampion(id : string): Observable<Champion|undefined> {
    return this.http.get<Champion>(`api/champions/${id}`).pipe(
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
