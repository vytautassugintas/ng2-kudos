import {Observable} from "rxjs";

export class AuthenticationServiceSpy {
  isLogged(): Observable<any> {
    return Observable.of(true);
  }

  login(): Observable<any> {
    return Observable.of([{fullName: "sender tester", userId: "312id"}]);
  }
}
