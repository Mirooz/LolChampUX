import { Injectable } from '@angular/core';
import { CHAMPIONS } from '../../champions-MOKS';
import { Champion } from '../../champion';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampListServiceService {

  constructor(private http: HttpClient) {}

  //API
  getListChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>('api/champions').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  private log(response: any) {
    console.table(response);
  }
  private handleError(error: any, result: Champion[]): Observable<Champion[]> {
    console.error(error);
    return of(result);
  }
}
