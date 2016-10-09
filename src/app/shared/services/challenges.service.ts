import {Injectable}     from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable, Subject}     from 'rxjs';
import {ResponseExtractor} from "./utils/ResponseExtractor";
import {API} from "../api.config";

@Injectable()
export class ChallengesService {

    private missionAnnouncedSource = new Subject<any>();
    private missionConfirmedSource = new Subject<any>();

    missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    missionConfirmed$ = this.missionConfirmedSource.asObservable();

    private sendChallengeUrl = API.URL + 'challenge/give';
    private newChallengesUrl = API.URL + 'challenge/sentAndReceived';
    private ongoingChallengesUrl = API.URL + 'challenge/ongoing';
    private challengesUrl = API.URL + 'challenge/';
    private challengesHistoryUrl = API.URL + 'challenge/history';
    private challengesAccomplishedHistoryUrl = API.URL + 'challenge/history/accomplished';
    private challengesFailedHistoryUrl = API.URL + 'challenge/history/failed';

    constructor(private http: Http) {
    }

    announceMission(mission: any) {
        this.missionAnnouncedSource.next(mission);
        console.log("Service got new mission: " + mission.name);
    }
    confirmMission(astronaut: any) {
        this.missionConfirmedSource.next(astronaut);
        console.log("Service got new astronaut: " + astronaut.name);
    }

    sendChallenge(challengeForm: any): Observable<any>{
        let body = JSON.stringify(challengeForm);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.sendChallengeUrl, body, options)
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleError);
    }

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
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleError);
    }

    getHistory(page: number, pageSize: number): Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let params: URLSearchParams = new URLSearchParams();
        params.set('page', page.toString());
        params.set('size', pageSize.toString());
        let options = new RequestOptions({headers: headers, withCredentials: true, search : params});

        return this.http.get(this.challengesHistoryUrl, options)
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleError);
    }

    getAccomplishedHistory(page: number, pageSize: number): Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let params: URLSearchParams = new URLSearchParams();
        params.set('page', page.toString());
        params.set('size', pageSize.toString());
        let options = new RequestOptions({headers: headers, withCredentials: true, search : params});

        return this.http.get(this.challengesAccomplishedHistoryUrl, options)
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleError);
    }

    getFailedHistory(page: number, pageSize: number): Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let params: URLSearchParams = new URLSearchParams();
        params.set('page', page.toString());
        params.set('size', pageSize.toString());
        let options = new RequestOptions({headers: headers, withCredentials: true, search : params});

        return this.http.get(this.challengesFailedHistoryUrl, options)
            .map(ResponseExtractor.extractJson)
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