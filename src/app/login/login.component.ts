import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../shared/authentication.service";
import {Credentials} from "../shared/credentials";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }

    submitted = false;

    model = new Credentials("vytautas.sugintas@swedbank.lt", "vytautas");

    ngOnInit() {
        this.authenticationService.isLogged()
            .subscribe(
                response => this.navigateHome(response)
            )
    }

    onSubmit(){
        this.login(this.model);
    }

    login(credentials: Credentials) {
        this.authenticationService.login(credentials.email, credentials.password)
            .subscribe(
                response => this.success(response),
                error => console.log(error))
    }

    success(response){
        this.router.navigate(['home']);
    }

    navigateHome(isLogged){
        if (isLogged){
            this.router.navigate(['home']);
        }
    }

}
