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

  constructor(private authService: AuthenticationService, private router: Router) {
    this.signInFormModel = new SignInFormModel();
    this.isReady = false;
  }

  ngOnInit() {
    this.authService.isLogged().subscribe(
      isAuthenticated => {
        if (isAuthenticated) {
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
    this.authService.login(this.signInFormModel).subscribe(
      response => {
        this.router.navigate(['home']);
      }
    );
    console.log(this.signInFormModel);
  }

}
