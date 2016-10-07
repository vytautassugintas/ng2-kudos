import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {Credentials, ConfirmationCode} from "../../shared/models/credentials";
declare var jQuery:any;

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

    confirmationCode: string;
    model = new Credentials("", "");

    ngOnInit() {
        this.authenticationService.isLogged()
            .subscribe(
                response => this.navigateHome(response)
            )
    }

    onSubmit() {
        this.showErrorMessage = false;
        this.errorMessage = null;
        this.login(this.model);
    }

    onConfirmSubmit(){
        this.authenticationService.confirmAccount(this.confirmationCode).subscribe(
            success => jQuery('#confirm-account-modal').modal('hode')
        );
    }

    login(credentials: Credentials) {
        this.authenticationService.login(credentials.email, credentials.password)
            .subscribe(
                success => this.router.navigate(['home']),
                error => this.handleErrors(error))
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
            case "user_not_confirmed" :
                this.errorMessage = "User not confirmed. Check email for confirmation code";
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
