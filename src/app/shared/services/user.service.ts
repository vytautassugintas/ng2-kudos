import {Injectable}     from "@angular/core";
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable}     from "rxjs/Observable";
import {API} from "../api.config";
import {ResponseExtractor} from "./helpers/response.helper";
import {Subject} from "rxjs";
import {RequestHelper} from "./helpers/request.helper";

@Injectable()
export class UserService {

  private currentUserProfileUrl = API.ENTRY.USER + "/profile";
  private userProfileUrl = API.ENTRY.USER + "/profile/";
  private userActionsUrl = API.ENTRY.USER + "/actions/";
  private emailPredicateUrl = API.ENTRY.USER + "/email/";
  private logoutUrl = API.ENTRY.AUTHENTICATION + "/logout";
  private actionsUrl = API.ENTRY.RELATION + "/feed";

  currentUser: any;
  currentUserSource: Subject<any>;
  userUpdated$: any;

  constructor(private http: Http) {
    this.currentUserSource = new Subject<any>();
    this.userUpdated$ = this.currentUserSource.asObservable();
  }

  updateUser(user: any) {
    this.currentUser = user;
    this.currentUserSource.next(user);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(this.currentUserProfileUrl, RequestHelper.getBasicRequestOptions())
      .map(response => {
        this.updateUser(response.json());
        return response.json();
      })
      .catch(ResponseExtractor.handleError);
  }

  getUserProfile(userId: string): Observable<any> {
    return this.http.get(this.userProfileUrl + userId, RequestHelper.getBasicRequestOptions())
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

  logout(): Observable<string> {
    return this.http.post(this.logoutUrl, null, RequestHelper.getBasicRequestOptions())
      .map(ResponseExtractor.extractSucces)
      .catch(ResponseExtractor.extractString)
  }

  actions(userId: string, page: number, pageSize: number): Observable<string> {
    return this.http.get(this.userActionsUrl + userId, RequestHelper.getPageableRequestOptions(page, pageSize))
      .map(ResponseExtractor.extractPage)
      .catch(ResponseExtractor.handleError);
  }

  globalActions(page: number, pageSize: number): Observable<string> {
    return this.http.get(this.actionsUrl, RequestHelper.getPageableRequestOptions(page, pageSize))
      .map(ResponseExtractor.extractPage)
      .catch(ResponseExtractor.handleError);
  }

  getEmailPredicates(predicate: string) {
    return this.http.get(this.emailPredicateUrl + predicate, RequestHelper.getBasicRequestOptions())
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }
}
