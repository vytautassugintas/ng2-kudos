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

    handleErrors(error: any) {
        console.log(error);
        let errorJson = JSON.parse(error);

        if (errorJson.fieldError){
            this.showError(errorJson.fieldError.message);
        }

        if (errorJson.fieldErrors){
            this.showError(errorJson.fieldErrors[0].message);
        }
    }

    showError(message: string) {
        this.showErrorMessage = true;
        this.errorMessage = message;
    }

    navigateHome(isLogged) {
        if (isLogged) {
            this.router.navigate(['home']);
        }
    }
}
