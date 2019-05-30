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
    'x-authenticated-user-token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1S3RNazNCdDVOTC1QWWNSbV9iSk1Ndm4teWFGeDhoc2NyOUVXZDZwdzhVIn0.eyJqdGkiOiIzNjg3YzRiZi02MGM1LTQyMzUtYWNhOS03MTk5ZDczNTgwNzAiLCJleHAiOjE1NTkyMzQ0NzksIm5iZiI6MCwiaWF0IjoxNTU5MjEyODc5LCJpc3MiOiJodHRwczovL2NhbWluby5zdGFja3JvdXRlLmNvbS9hdXRoL3JlYWxtcy9zdW5iaXJkIiwiYXVkIjoiYWRtaW4tY2xpIiwic3ViIjoiNmYzMjRkYjctMzJhNS00NDM3LWE0NTEtMzVjZjUzMjY5YWFmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYWRtaW4tY2xpIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiYzU5OTRiM2MtNzFhZS00OTZkLWFlYWYtZDhjZDg4OTNiOWQ5IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlc291cmNlX2FjY2VzcyI6e30sIm5hbWUiOiJBZGl0eWEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZGl0eWEiLCJnaXZlbl9uYW1lIjoiQWRpdHlhIiwiZW1haWwiOiJhZGl0eWFAbmlpdC5jb20ifQ.HBJw_6se7js2ZUbnBB5opstMOI_SAOikI3jIYDsRUMoACstj9sLuUfxyx7FeRCA86wEbv2d15E33BA_MhWaEFBnNjnHFt-TvEmNeNYzG7NrgEcSsNqHqlH618H2ljaFQ7KQ_UE0YSdq7y1pPkOg6HBnXke6Cu5RUaVv8Hjd3XGzPEFpKZtzplttD0FDsMXpt7Z_PeAhagWBIOcriZMEke8wFFXYdRqSd1ay9z3ZMY5Y1w3hHAptUsDt-WbYTQB4UOx2xbuUVQEUX2jxG9Nq7bfP1BUcwybJ6UKcaiYyo0d4Jer8dlMGUYTLJU8krFhuDvKnCRrH_ro7-0K0PCRROQw',
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
