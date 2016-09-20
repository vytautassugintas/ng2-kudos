import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {
    }

    private loginUrl = 'http://test.openkudos.com/api/authentication/login';
    private registrationUrl = 'http://test.openkudos.com/api/authentication/register';
    private checkUserUrl = 'http://test.openkudos.com/api/';

    login(email: string, password: string): Observable<string> {
        let body = JSON.stringify({email, password});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.loginUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    register(email: string, fullName: string, password: string): Observable<string> {
        let splittedName = fullName.split(' ');
        let firstName = splittedName[0];
        let lastName = splittedName[1];
        let confirmPassword = password;
        let body = JSON.stringify({firstName, lastName, password, confirmPassword, email});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.registrationUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }



    isLogged(): Observable<string> {
        let headers = new Headers();
        let options = new RequestOptions({headers: headers, withCredentials: true});
        return this.http.get(this.checkUserUrl, options)
            .map(this.extractLogged)
            .catch(this.handleError);
    }

    private extractLogged(response: Response) {
        if (!response.json().logged) {
            throw 'User not logged in';
        } else {
            return response.json().logged;
        }
    }

    private extractData(res: Response) {
        return res;
    }

    private handleError(error: any) {
        return Observable.throw(error);
    }
}