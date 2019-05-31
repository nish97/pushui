import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private handler = new Subject<any>();

  broadcast( payload: any) {
    this.handler.next({ payload });
  }

  getMessage(): Observable<any> {
    return this.handler.asObservable();
}
  // .filter(message => message.type === type)
  //   .map(message => message.payload)
  //   .subscribe(callback);
}
