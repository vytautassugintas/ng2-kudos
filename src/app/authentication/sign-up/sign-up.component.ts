import { Component, OnInit } from '@angular/core';
import {SignUpFormModel} from "../../shared/models/SignUpFormModel";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../shared/components/notification/notification.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss'],
  providers: [AuthenticationService]
})
export class SignUpComponent implements OnInit {

  formModel: SignUpFormModel;
  hasErrors: boolean;
  errorMessage: string;

  constructor(private authService: AuthenticationService, private router: Router, private notificationService: NotificationService) {
    this.formModel = new SignUpFormModel();
    this.hasErrors = false;
    this.errorMessage = "";
  }

  ngOnInit() {
  }

  onSubmit(){
    this.hasErrors = false;
    this.authService.register(this.formModel).subscribe( () => {
      this.notificationService.success("Success", "New user registered " + this.formModel.fullName);
      this.router.navigate(['sign-in']);
      this.clearForm();
    },
    error => {
      this.hasErrors = true;
      if (error.fieldError) {
        this.errorMessage = error.fieldError.message;
      } else {
        this.errorMessage = "Something went horribly wrong. If you see this message, most likely server is down";
      }
    })
  }

  clearForm(){
    this.formModel = new SignUpFormModel();
  }

}
