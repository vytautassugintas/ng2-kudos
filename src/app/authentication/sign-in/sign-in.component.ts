import {Component, OnInit} from '@angular/core';
import {SignInFormModel} from "../../shared/models/SignInFormModel";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.scss'],
  providers: [AuthenticationService]
})
export class SignInComponent implements OnInit {

  signInFormModel: SignInFormModel;
  isReady: boolean;
  isLoading: boolean;
  hasErrors: boolean;
  errorMessage: string;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.signInFormModel = new SignInFormModel();
    this.isReady = false;
    this.hasErrors = false;
    this.isLoading = false;
    this.errorMessage = "";
  }

  ngOnInit() {
    this.authService.isLogged().subscribe(
      result => {
        if (result.logged) {
          this.router.navigate(['home']);
        }
        this.isReady = true;
      },
      error => {
        this.isReady = true;
      }
    );
  }

  onSubmit() {
    this.isLoading = true;
    this.hasErrors = false;
    this.authService.login(this.signInFormModel).subscribe(
      response => {
        this.isLoading = false;
        this.router.navigate(['home']);
      },
      error => {
        this.isLoading = false;
        this.hasErrors = true;
        this.errorMessage = error.fieldError.message;
      }
    );
  }

}
