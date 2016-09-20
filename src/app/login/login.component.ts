import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../shared/authentication.service";
import {Credentials} from "../shared/credentials";
import {Router} from "@angular/router";
import {_switch} from "rxjs/operator/switch";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }

    showErrorMessage = false;
    showPassword = false;
    errorMessage: string;
    disableEye = "fa-eye-slash";

    showSignUpErrorMessage = false;
    signUpErrorMessage: string;

    model = new Credentials("vytautas.sugintas@swedbank.lt", "vytautas");

    ngOnInit() {
        this.authenticationService.isLogged()
            .subscribe(
                response => this.navigateHome(response)
            )
    }

    onSubmit() {
        this.login(this.model);
    }

    login(credentials: Credentials) {
        this.authenticationService.login(credentials.email, credentials.password)
            .subscribe(
                response => this.success(response),
                error => this.handleErrors(error))
    }

    success(response) {
        this.router.navigate(['home']);
    }

    handleErrors(error) {
        this.showErrorMessage = true;
        switch (error._body) {
            case "user_not_exist" :
                this.errorMessage = "User not exist.";
                break;
            case "email_password_mismatch" :
                this.errorMessage = "Password is incorrect.";
                break;
            default :
                this.errorMessage = "Something went wrong";
                break;
        }
    }

    navigateHome(isLogged) {
        if (isLogged) {
            this.router.navigate(['home']);
        }
    }
}
