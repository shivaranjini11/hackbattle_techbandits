import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  
  apiFetch(url:any ): Observable<any>{
    const headerOptions = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content/Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS,PATCH'
      }
    }

   const result= this.http.get<any>(url, headerOptions).pipe(
    catchError(this.handleError('getItem')),
   )
   return result;
  }


  public handleError<T>(operation='operation', result?: T){
    return (error: HttpErrorResponse): Observable<T> => {
      return of(result as T);
    }
  }
  
}
