import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {RegistrationCredentials} from "../../shared/models/credentials";


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    providers: [AuthenticationService]
})
export class SignUpComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }

    showSignUpErrorMessage = false;
    showPassword = false;
    signUpErrorMessage: string;

    model = new RegistrationCredentials("vytautas.sugintas@swedbank.lt", "vytautas", "vytautas sugintas");

    ngOnInit() {

    }

    onSubmit() {
        if(this.isFormValid(this.model)) {
            this.signUp(this.model);
        }
    }

    signUp(credentials: RegistrationCredentials) {
        this.authenticationService.register(credentials.email, credentials.fullName, credentials.password)
            .subscribe(
                response => this.signedUpSuccessfully(),
                error => this.handleErrors(error))
    }

    signedUpSuccessfully() {
        this.router.navigate(['login']);
    }

    handleErrors(error) {
        this.showSignUpErrorMessage = true;
        switch (error._body) {
            case "user_not_exist" :
                this.signUpErrorMessage = "User not exist.";
                break;
            case "email_password_mismatch" :
                this.signUpErrorMessage = "Password is incorrect.";
                break;
            default :
                this.signUpErrorMessage = "Something went wrong";
                break;
        }
    }

    isFormValid(credentials: RegistrationCredentials): boolean{
        if (credentials.fullName.split(" ")[1] == null){
            return this.showErrorAndReturnFalse("Please enter your surname");
        } /*else if(credentials.email.search("swedbank") == -1){
            return this.showErrorAndReturnFalse("Please enter Swedbank email address");
        }*/ else {
            return this.clearErrorsAndReturnTrue();
        }
    }

    showErrorAndReturnFalse(message:string): boolean{
        this.showSignUpErrorMessage = true;
        this.signUpErrorMessage = message;
        return false;
    }

    clearErrorsAndReturnTrue() : boolean {
        this.showSignUpErrorMessage = false;
        this.signUpErrorMessage = "";
        return true;
    }

}
