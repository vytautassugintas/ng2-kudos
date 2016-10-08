import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {ResponseExtractor} from "./utils/ResponseExtractor";
import {API} from "../api.config";

@Injectable()
export class ChallengesService {
    constructor(private http: Http) {
    }

    private newChallengesUrl = API.URL + 'challenge/sentAndReceived';
    private ongoingChallengesUrl = API.URL + 'challenge/ongoing';
    private challengesUrl = API.URL + 'challenge/';

    getNewChallenges(page: number, pageSize: number): Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let params: URLSearchParams = new URLSearchParams();
        params.set('page', page.toString());
        params.set('size', pageSize.toString());
        let options = new RequestOptions({headers: headers, withCredentials: true, search : params});

        return this.http.get(this.newChallengesUrl, options)
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleError);
    }

    getOngoingChallenges(page: number, pageSize: number): Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let params: URLSearchParams = new URLSearchParams();
        params.set('page', page.toString());
        params.set('size', pageSize.toString());
        let options = new RequestOptions({headers: headers, withCredentials: true, search : params});

        return this.http.get(this.ongoingChallengesUrl, options)
            .map(ResponseExtractor.extractPage)
            .catch(ResponseExtractor.handleError);
    }

    acceptChallenge(challengeId: string){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.challengesUrl + challengeId + "/accept", null, options)
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleError);
    }

    declineChallenge(challengeId: string){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.challengesUrl + challengeId + "/decline", null, options)
            .map(ResponseExtractor.extractSucces)
            .catch(ResponseExtractor.handleError);
    }

    cancelChallenge(challengeId: string){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.challengesUrl + challengeId + "/cancel", null, options)
            .map(ResponseExtractor.extractSucces)
            .catch(ResponseExtractor.handleError);
    }

    completeChallenge(challengeId: string){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.challengesUrl + challengeId + "/markAsCompleted", null, options)
            .map(ResponseExtractor.extractSucces)
            .catch(ResponseExtractor.handleError);
    }

    markAsFailedChallenge(challengeId: string){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.challengesUrl + challengeId + "/markAsFailed", null, options)
            .map(ResponseExtractor.extractSucces)
            .catch(ResponseExtractor.handleError);
    }

}