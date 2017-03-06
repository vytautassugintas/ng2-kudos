import { Injectable } from '@angular/core';
import {RequestOptions, URLSearchParams, Headers, Http} from "@angular/http";
import {ResponseExtractor} from "./helpers/response.helper";
import {Observable} from "rxjs";
import {API} from "../api.config";

@Injectable()
export class LeadersService {

  constructor(private http: Http) {
  }

  private receiversUrl = API.ENTRY.LEADERS + "/receivers?";
  private sendersUrl = API.ENTRY.LEADERS+ "/senders?";

  getTopReceivers(periodInDays: string): Observable<any> {
    return this.http.get(this.receiversUrl, this.getRequestOptions(periodInDays))
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

  getTopSenders(periodInDays: string): Observable<any> {
    return this.http.get(this.sendersUrl, this.getRequestOptions(periodInDays))
      .map(ResponseExtractor.extractJson)
      .catch(ResponseExtractor.handleError);
  }

  private getRequestOptions(periodInDays: string): RequestOptions {
    let headers = new Headers();
    let params: URLSearchParams = new URLSearchParams();

    if (periodInDays != '') {
      params.set('periodInDays', periodInDays.toString());
    }

    return new RequestOptions({headers: headers, withCredentials: true, search: params});
  }

}
