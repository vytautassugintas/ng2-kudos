import {Observable} from "rxjs";

export class KudosServiceSpy {

  currentUser: any = {fullName: "sender tester", userId: "312id"};
  transactionsList: Array = [{id: "id"}, {id: "id"}];

  getUserHistory(id: string): Observable<Array<any>> {
    return Observable.of(this.transactionsList);
  }
}
