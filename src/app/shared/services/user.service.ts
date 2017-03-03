import {Injectable}     from "@angular/core";
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable}     from "rxjs/Observable";
import {API} from "../api.config";
import {ResponseExtractor} from "./helpers/response.helper";

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  private currentUserProfileUrl = API.ENTRY.USER + "/profile";
  private userProfileUrl = API.ENTRY.USER + "/profile/";
  private userActionsUrl = API.ENTRY.USER + "/actions/";
  private emailPredicateUrl = API.ENTRY.USER + "/email/";
  private subscribeUrl = API.ENTRY.USER + "/subscribe/";
  private unsubscribeUrl = API.ENTRY.USER + "/unsubscribe/";

  private logoutUrl = API.ENTRY.AUTHENTICATION + "/logout";

  private actionsUrl = API.ENTRY.RELATION + "/feed";

  getCurrentUser(): Observable<any> {
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.get(this.currentUserProfileUrl, options)
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

  userProfile(userId: string): Observable<any> {
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.get(this.userProfileUrl + userId, options)
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

  logout(): Observable<string>{
    let headers = new Headers({});
    let options = new RequestOptions({headers: headers, withCredentials: true});
    console.log("LOOGING OUT");
    return this.http.post(this.logoutUrl, null, options)
      .map(ResponseExtractor.extractSucces)
      .catch(ResponseExtractor.extractString)
  }

  actions(userId: string, page: number, pageSize: number): Observable<string> {
    let headers = new Headers({"Content-Type": "application/json"});
    let params: URLSearchParams = new URLSearchParams();
    params.set("page", page.toString());
    params.set("size", pageSize.toString());
    let options = new RequestOptions({headers: headers, withCredentials: true, search : params});

    return this.http.get(this.userActionsUrl + userId, options)
      .map(ResponseExtractor.extractPage)
      .catch(ResponseExtractor.handleError);
  }

  globalActions(page: number, pageSize: number): Observable<string> {
    let headers = new Headers({"Content-Type": "application/json"});
    let params: URLSearchParams = new URLSearchParams();
    params.set("page", page.toString());
    params.set("size", pageSize.toString());
    let options = new RequestOptions({headers: headers, withCredentials: true, search : params});

    return this.http.get(this.actionsUrl, options)
      .map(ResponseExtractor.extractPage)
      .catch(ResponseExtractor.handleError);
  }

  getEmailPredicates(predicate: string){
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.get(this.emailPredicateUrl + predicate, options)
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

  changeSubscription(subscribe: boolean){
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    if (subscribe){
      return this.http.post(this.subscribeUrl, null, options)
        .map(ResponseExtractor.extractString)
        .catch(ResponseExtractor.extractString)
    } else {
      return this.http.post(this.unsubscribeUrl, null, options)
        .map(ResponseExtractor.extractString)
        .catch(ResponseExtractor.extractString)
    }
  }
}
