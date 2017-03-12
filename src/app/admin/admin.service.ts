import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Headers, RequestOptions, Http} from "@angular/http";
import {API} from "../shared/api.config";
import {ResponseExtractor} from "../shared/services/helpers/response.helper";

@Injectable()
export class AdminService{

  private usersUrl = API.ENTRY.ADMIN + "/users";
  private confirmationUrl = API.ENTRY.ADMIN + "/confirm/";

  constructor(private http: Http){

  }

  getUsers(): Observable<any> {
    let headers = new Headers();
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(this.usersUrl, options)
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

  confirmUser(userHash: string): Observable<any> {
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.post(this.confirmationUrl + userHash, null, options)
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }
}
