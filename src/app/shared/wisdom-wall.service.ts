import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class WisdomWallService {
    constructor(private http: Http) {
    }

    private randomIdeaUrl = "http://test.openkudos.com/api/wisdomwall/randomIdea";
    private addIdeaUrl = "http://test.openkudos.com/api/wisdomwall/add";

    addNewIdea(author: string, phrase: string): Observable<string> {
        let body = JSON.stringify({author, phrase});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.addIdeaUrl, body, options)
            .map(this.extractCallback)
            .catch(this.handleError);
    }

    getRandomIdea(): Observable<string> {
        return this.http.get(this.randomIdeaUrl, this.getRequestOptions())
            .map(this.extractData)
            .catch(this.handleError);
    }

    private getRequestOptions(): RequestOptions {
        let headers = new Headers();
        return new RequestOptions({headers: headers, withCredentials: true});
    }

    private extractData(res: Response) {
        return res.json();
    }

    private extractCallback(res: Response) {
        return res;
    }

    private handleError(error: any) {
        return Observable.throw(error);
    }
}