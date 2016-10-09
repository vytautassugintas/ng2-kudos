import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {ResponseExtractor} from "./utils/ResponseExtractor";
import {API} from "../api.config";

@Injectable()
export class HomeService {

    constructor(private http: Http) {
    }

    private loginUrl = API.URL + 'user/profile';
    private logoutUrl = API.URL + 'authentication/logout';
    private userActionsUrl = API.URL + 'user/actions/';
    private actionsUrl = API.URL + 'relation/feed';
    private emailPredicateUrl = API.URL + 'user/email/';

    home(): Observable<string> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.get(this.loginUrl, options)
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleError);
    }

    logout(): Observable<string>{
        let headers = new Headers({});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.logoutUrl, null, options)
            .map(ResponseExtractor.extractString)
            .catch(ResponseExtractor.extractString)
    }

    actions(userId: string, page: number, pageSize: number): Observable<string> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let params: URLSearchParams = new URLSearchParams();
        params.set('page', page.toString());
        params.set('size', pageSize.toString());
        let options = new RequestOptions({headers: headers, withCredentials: true, search : params});

        return this.http.get(this.userActionsUrl + userId, options)
            .map(ResponseExtractor.extractPage)
            .catch(ResponseExtractor.handleError);
    }

    globalActions(page: number, pageSize: number): Observable<string> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let params: URLSearchParams = new URLSearchParams();
        params.set('page', page.toString());
        params.set('size', pageSize.toString());
        let options = new RequestOptions({headers: headers, withCredentials: true, search : params});

        return this.http.get(this.actionsUrl, options)
            .map(ResponseExtractor.extractPage)
            .catch(ResponseExtractor.handleError);
    }

    getEmailPredicates(predicate: string){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.get(this.emailPredicateUrl + predicate, options)
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleError);
    }
}