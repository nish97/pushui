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
    'x-authenticated-user-token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1S3RNazNCdDVOTC1QWWNSbV9iSk1Ndm4teWFGeDhoc2NyOUVXZDZwdzhVIn0.eyJqdGkiOiIwMTRiODExYi0wMzM1LTQ4YjEtYjJmNy1kNGNjNDAxY2M4YTAiLCJleHAiOjE1NTkyMTI0NTgsIm5iZiI6MCwiaWF0IjoxNTU5MTkwODU4LCJpc3MiOiJodHRwczovL2NhbWluby5zdGFja3JvdXRlLmNvbS9hdXRoL3JlYWxtcy9zdW5iaXJkIiwiYXVkIjoiYWRtaW4tY2xpIiwic3ViIjoiNmYzMjRkYjctMzJhNS00NDM3LWE0NTEtMzVjZjUzMjY5YWFmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYWRtaW4tY2xpIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiYmJmOGQ4OTktNmM1Ni00YTM4LTk0ZDEtMDE4NDcwZTczNmMzIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlc291cmNlX2FjY2VzcyI6e30sIm5hbWUiOiJBZGl0eWEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZGl0eWEiLCJnaXZlbl9uYW1lIjoiQWRpdHlhIiwiZW1haWwiOiJhZGl0eWFAbmlpdC5jb20ifQ.QVVbrVEQ_fY3Kz9sv8AGFlsGC7lL7AmeMwmdAF1kzLdneD6-BwIfPucYhOkPeHIQuxW5bbD0h5UaHAXBttio1140aAmTpDUWn0jhwbuzfApwjT2eq0bMCJGAdXUdRUZsDRABxFy5sZuqdOMJjbK4DvuYlPJ4NOZRVdi2xctforlrJA8TVEqqnZ9QW4POiNll2Soa93W73cNyrJgb0_xJw9rXeV2W1wsdf5Hqw2nxbu7CjI_zZD-Y2Hud_zEKqcKEGc3-BUy2mbzoHSjSKnT--KjKz5qHDH7je91iZTqTHQgfjG-nz6xwWO3CyFpKoiRCE05TInrH5woKG5kSVOtdKg',
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
