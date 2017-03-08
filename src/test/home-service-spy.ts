import {Observable} from "rxjs";

export class HomeServiceSpy {
  getGlobalTransactions(): Observable<any> {
    return Observable.of([{id: 'id'}]);
  }
}
