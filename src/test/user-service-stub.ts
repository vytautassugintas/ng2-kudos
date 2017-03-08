import {Observable} from "rxjs";

export class UserServiceSpy {

  currentUser: any = {fullName: "sender tester", userId: "312id"};

  getCurrentUser(): Observable<any> {
    return Observable.of(this.currentUser);
  }
}
