import { Injectable } from '@angular/core';
import { Observable, throwError, } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmMzU5MzdlOWZmY2U0OWVjOTFhMWM2ZjNiMGRkODNjZSJ9.-TFevs_hwibGVswDBJhhgcJ3I4jEi1_dWuiNHsqMOoc',
    'Content-Type': 'application/json',
    'Postman-Token': '37f5daff-979a-4e24-9745-df441a0ea34d',
    'cache-control': 'no-cache',
    'x-authenticated-user-token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1S3RNazNCdDVOTC1QWWNSbV9iSk1Ndm4teWFGeDhoc2NyOUVXZDZwdzhVIn0.eyJqdGkiOiIwOTVjZDQ2My03MTgwLTRkOWYtOGU0NC1hNzJjNTA4YTcwZmIiLCJleHAiOjE1NTkzMTczOTIsIm5iZiI6MCwiaWF0IjoxNTU5Mjk1NzkyLCJpc3MiOiJodHRwczovL2NhbWluby5zdGFja3JvdXRlLmNvbS9hdXRoL3JlYWxtcy9zdW5iaXJkIiwiYXVkIjoiYWRtaW4tY2xpIiwic3ViIjoiNmYzMjRkYjctMzJhNS00NDM3LWE0NTEtMzVjZjUzMjY5YWFmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYWRtaW4tY2xpIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiOGZlMWM3MWQtMTVhYi00YmNmLWFiMGUtMWQyNGEyZjYzYzNkIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlc291cmNlX2FjY2VzcyI6e30sIm5hbWUiOiJBZGl0eWEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZGl0eWEiLCJnaXZlbl9uYW1lIjoiQWRpdHlhIiwiZW1haWwiOiJhZGl0eWFAbmlpdC5jb20ifQ.a4-eDy_AM3ZyV2la8kn3T6WtY96CoPPUxG36MInt586-cuAiRMW4NKVJbYZjut2rY4zHGSYN01a7QG_p1c814Jujb5BctsuyB_J6LiTK2_GeYieVgiidEv2TzCorLMk_yNtoO1CT4FER9MT74e0BFg1GfIfxpyJVaBaaRB9LoLQdxcQrPgkauROQy6RSMb20h2G_pJhNwF2GALiKRaRQSOIuQDWQNO6nKJI1pBMqIw2OgsjD9pvkFVmp55G_oiaSiA1lcszh7ULFUBYbNQ98GoTFvsUDDvT5-_DTDSjLn49SiTepex6vnyqsK_WsM0J6KXxj9Jw5wyyQ0AZwyWzfZw',
  })
};


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  private _apiUrl: string = 'https://camino.stackroute.com/api/';


  getList(body: any, _Url: string): Observable<any> {
    return this.httpClient.post(this._apiUrl + _Url, body, httpOptions).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
