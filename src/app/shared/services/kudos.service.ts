import { Injectable } from '@angular/core';
import {GiveKudosFormModel} from "../models/GiveKudosFormModel";
import {Observable} from "rxjs";
import {Headers, RequestOptions, Http} from "@angular/http";
import {ResponseExtractor} from "./helpers/response.helper";
import {API} from "../api.config";

@Injectable()
export class KudosService {

  private giveKudosUrl = API.ENTRY.KUDOS + "/give";

  constructor(private http: Http) { }

  give(form: GiveKudosFormModel): Observable<any> {
    let body = form.toJSON();
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.post(this.giveKudosUrl, body, options)
      .map(ResponseExtractor.extractSucces)
      .catch(ResponseExtractor.handleSimpleError);
  }

}
