import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {ResponseExtractor} from "./utils/ResponseExtractor";
import {API} from "../api.config";
import {RequestHelper, Header} from "./utils/RequestHelper";

@Injectable()
export class KudosService {
    constructor(private http: Http) {
    }

    private giveUrl = API.URL + 'kudos/give';

    private historyUrl = API.URL + 'history';
    private historyGivenUrl = API.URL + 'kudos/history/given';
    private historyReceivedUrl = API.URL + 'kudos/history/received';

    private userHistory = API.URL + 'kudos/history/'; // {{userId}}
    private historyGivenUrl = API.URL + 'kudos/history/given/'; // {{userId}}
    private historyReceivedUrl = API.URL + 'kudos/history/received/'; // {{userId}}

    public giveKudos(email: string, amount: number): Observable<any> {
        let body = JSON.stringify({email, amount});
        return this.http.post(this.giveUrl, body, RequestHelper.getBasicRequestOptions());
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
            .map(ResponseExtractor.extractPage)
            .catch(ResponseExtractor.handleError);
    }

    public getUserGivenHistory(userId: string, page: number, pageSize: number): Observable<any> {
        return this.http.get(this.historyGivenUrl + userId, RequestHelper.getPageableRequestOptions(page, pageSize))
            .map(ResponseExtractor.extractPage)
            .catch(ResponseExtractor.handleError);
    }

    public getUserReceivedHistory(userId: string, page: number, pageSize: number): Observable<any> {
        return this.http.get(this.historyReceivedUrl + userId, RequestHelper.getPageableRequestOptions(page, pageSize))
            .map(ResponseExtractor.extractPage)
            .catch(ResponseExtractor.handleError);
    }

}