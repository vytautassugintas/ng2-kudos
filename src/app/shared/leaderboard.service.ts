import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class LeaderboardService {
    constructor(private http: Http) {
    }

    private receiversUrl = "http://test.openkudos.com/api/leaderboard/receivers?";
    private sendersUrl = "http://test.openkudos.com/api/leaderboard/senders?";

    getTopReceivers(periodInDays: string): Observable<string> {
        return this.http.get(this.receiversUrl, this.getRequestOptions(periodInDays))
            .map(this.extractData)
            .catch(this.handleError);
    }

    getTopSenders(periodInDays: string): Observable<string> {
        return this.http.get(this.sendersUrl, this.getRequestOptions(periodInDays))
            .map(this.extractData)
            .catch(this.handleError);
    }

    private getRequestOptions(periodInDays: string): RequestOptions {
        let headers = new Headers();
        let params: URLSearchParams = new URLSearchParams();

        if (periodInDays != '') {
            params.set('periodInDays', periodInDays.toString());
        }

        return new RequestOptions({headers: headers, withCredentials: true, search: params});
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: any) {
        return Observable.throw(error);
    }
}