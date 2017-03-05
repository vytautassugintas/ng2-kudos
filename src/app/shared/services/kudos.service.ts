import {Injectable} from '@angular/core';
import {GiveKudosFormModel} from "../models/GiveKudosFormModel";
import {Observable} from "rxjs";
import {Headers, RequestOptions, Http} from "@angular/http";
import {ResponseExtractor} from "./helpers/response.helper";
import {API} from "../api.config";
import {RequestHelper} from "./helpers/request.helper";

@Injectable()
export class KudosService {

  private giveKudosUrl = API.ENTRY.KUDOS + "/give";
  private historyUrl = API.ENTRY.KUDOS + "/history";
  private historyGivenUrl = API.ENTRY.KUDOS + "/history/given";
  private historyReceivedUrl = API.ENTRY.KUDOS + "/history/received";
  private userHistory = API.ENTRY.KUDOS + "/history/";
  private userHistoryGivenUrl = API.ENTRY.KUDOS + "/history/given/";
  private userHistoryReceivedUrl = API.ENTRY.KUDOS + "/history/received/";

  constructor(private http: Http) {
  }

  give(form: GiveKudosFormModel): Observable<any> {
    let body = form.toJSON();
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.post(this.giveKudosUrl, body, options)
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleSimpleError);
  }

  public getHistory(page: number, pageSize: number): Observable<any> {
    return this.http.get(this.historyUrl, RequestHelper.getPageableRequestOptions(page, pageSize))
      .map(ResponseExtractor.extractPage)
      .catch(ResponseExtractor.handleError);
  }

  public getGivenHistory(page: number, pageSize: number): Observable<any> {
    return this.http.get(this.historyGivenUrl, RequestHelper.getPageableRequestOptions(page, pageSize))
      .map(ResponseExtractor.extractPage)
      .catch(ResponseExtractor.handleError);
  }

  public getReceivedHistory(page: number, pageSize: number): Observable<any> {
    return this.http.get(this.historyReceivedUrl, RequestHelper.getPageableRequestOptions(page, pageSize))
      .map(ResponseExtractor.extractPage)
      .catch(ResponseExtractor.handleError);
  }

  public getUserHistory(userId: string, page: number, pageSize: number): Observable<any> {
    return this.http.get(this.userHistory + userId, RequestHelper.getPageableRequestOptions(page, pageSize))
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

  public getUserGivenHistory(userId: string, page: number, pageSize: number): Observable<any> {
    return this.http.get(this.userHistoryGivenUrl + userId, RequestHelper.getPageableRequestOptions(page, pageSize))
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

  public getUserReceivedHistory(userId: string, page: number, pageSize: number): Observable<any> {
    return this.http.get(this.userHistoryReceivedUrl + userId, RequestHelper.getPageableRequestOptions(page, pageSize))
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

}
