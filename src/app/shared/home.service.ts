import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class HomeService {
    constructor(private http: Http) {
    }

    private loginUrl = 'http://test.openkudos.com/api/user/profile';
    private actionsUrl = 'http://test.openkudos.com/api/user/actions/';

    home(): Observable<string> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.get(this.loginUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    actions(userId: string, page: number, pageSize: number): Observable<string> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let params: URLSearchParams = new URLSearchParams();
        params.set('page', page.toString());
        params.set('size', pageSize.toString());
        let options = new RequestOptions({headers: headers, withCredentials: true, search : params});

        return this.http.get(this.actionsUrl + userId, options)
            .map(this.extractPage)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json();
    }

    private extractPage(res: Response) {
        return res.json().content;
    }

    private handleError(error: any) {
        return Observable.throw(error);
    }
}