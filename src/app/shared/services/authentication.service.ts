import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {API} from "../api.config";
import {ResponseExtractor} from "./utils/ResponseExtractor";

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {
    }

    private loginUrl = API.URL + 'authentication/login';
    private registrationUrl = API.URL + 'authentication/register';
    private checkUserUrl = API.URL;

    login(email: string, password: string): Observable<string> {
        let body = JSON.stringify({email, password});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.loginUrl, body, options)
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleError);
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
            .map(ResponseExtractor.extractJson)
            .catch(ResponseExtractor.handleError);
    }



    isLogged(): Observable<string> {
        let headers = new Headers();
        let options = new RequestOptions({headers: headers, withCredentials: true});
        return this.http.get(this.checkUserUrl, options)
            .map(this.extractLogged)
            .catch(ResponseExtractor.handleError);
    }

    private extractLogged(response: Response) {
        if (!response.json().logged) {
            throw 'User not logged in';
        } else {
            return response.json().logged;
        }
    }
}