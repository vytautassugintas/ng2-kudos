import {Injectable}     from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable}     from "rxjs/Observable";
import {API} from "../api.config";
import {ResponseExtractor} from "./helpers/response.helper";
import {SignInFormModel} from "../models/SignInFormModel";
import {SignUpFormModel} from "../models/SignUpFormModel";

@Injectable()
export class AuthenticationService {

  private loginUrl = API.ENTRY.AUTHENTICATION + "/login";
  private registrationUrl = API.ENTRY.AUTHENTICATION + "/register";
  private confirmationUrl = API.ENTRY.AUTHENTICATION + "/confirm/";
  private resetUrl = API.ENTRY.AUTHENTICATION + "/reset";
  private changePasswordUrl = API.URL + API.ENTRY.AUTHENTICATION + "/change/password";
  private checkUserUrl = API.URL;

  isAuthenticated:boolean;

  constructor(private http: Http) {
  }

  login(signInForm: SignInFormModel): Observable<any> {
    let body = signInForm.toJSON();
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.post(this.loginUrl, body, options)
      .map(ResponseExtractor.extractSucces)
      .catch(ResponseExtractor.handleSimpleError);
  }

  register(form: SignUpFormModel): Observable<string> {
    let body = form.toJSON();
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.post(this.registrationUrl, body, options)
      .map(ResponseExtractor.extractSucces)
      .catch(ResponseExtractor.handleError);
  }

  confirmAccount(confirmationCode: string): Observable<any> {
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.post(this.confirmationUrl + confirmationCode, null, options)
      .map(ResponseExtractor.extractSucces)
      .catch(ResponseExtractor.handleError);
  }

  changePassword(newPassword: string): Observable<any> {
    let body = JSON.stringify({newPassword});
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.post(this.changePasswordUrl, body, options)
      .map(ResponseExtractor.extractSucces)
      .catch(ResponseExtractor.handleError);
  }

  reset(email: string): Observable<any> {
    let body = JSON.stringify({email});
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.post(this.resetUrl, body, options)
      .map(ResponseExtractor.extractSucces)
      .catch(ResponseExtractor.handleError);
  }

  isLogged(): Observable<boolean> {
    let headers = new Headers();
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(this.checkUserUrl, options)
      .map(this.extractLogged)
      .catch(ResponseExtractor.handleError);
  }

  private extractLogged(response: Response) {
    if (!response.json().logged) {
      throw "User not logged in";
    } else {
      return response.json().logged;
    }
  }

}
