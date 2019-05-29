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
    'x-authenticated-user-token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1S3RNazNCdDVOTC1QWWNSbV9iSk1Ndm4teWFGeDhoc2NyOUVXZDZwdzhVIn0.eyJqdGkiOiIxZDIyMjg0YS1lYmY2LTQwN2QtODgxYS05MTkwMjA2OTcxZGMiLCJleHAiOjE1NTkxNDE2OTIsIm5iZiI6MCwiaWF0IjoxNTU5MTIwMDkyLCJpc3MiOiJodHRwczovL2NhbWluby5zdGFja3JvdXRlLmNvbS9hdXRoL3JlYWxtcy9zdW5iaXJkIiwiYXVkIjoiYWRtaW4tY2xpIiwic3ViIjoiNmYzMjRkYjctMzJhNS00NDM3LWE0NTEtMzVjZjUzMjY5YWFmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYWRtaW4tY2xpIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiM2I4MmY0MzMtNDc5Ni00MmI3LWJlODQtNjFmZDM2N2I1NmI2IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlc291cmNlX2FjY2VzcyI6e30sIm5hbWUiOiJBZGl0eWEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZGl0eWEiLCJnaXZlbl9uYW1lIjoiQWRpdHlhIiwiZW1haWwiOiJhZGl0eWFAbmlpdC5jb20ifQ.pVvkDfKaCCCh9spR5S-WUOWZ8Qzm-oOCi6UcKwM9hbigongE1wG0u6Ev1_DJl83pTlNU8kZxUSud-D9iU2idoOc6REn8RY78HkciqqzwlI3E8qNS3F5HQglnbYzATS_8KJPeAVQ0h2RYCm4nD2yQqXjxjtWTaeZi_XPA-eE0OwYyCOidY3iS13ANXIEeirXjGo4QIKLlz3YaVJzTI81DMr0ltB-QuZs2A_t_z3e4v-ffklC_Xb7sX6udAQpKsr4oR1xJULpXaofxutGomLOON7r9G5jjSumnsDBcuq8xLmuAOUCijNk6bHBkFJzk7MaxV1Vpx0FcSYXP9UAv-AgXvQ',
  })
};


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  private _apiUrl: string = 'https://camino.stackroute.com/api/';


  getStudents(body: any, _Url: string): Observable<any> {
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
