import { Component, OnInit } from '@angular/core';
import {SignUpFormModel} from "../../shared/models/SignUpFormModel";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications/lib/notifications.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss'],
  providers: [AuthenticationService]
})
export class SignUpComponent implements OnInit {

  formModel: SignUpFormModel;

  constructor(private authService: AuthenticationService, private router: Router, private notificationsService: NotificationsService) {
    this.formModel = new SignUpFormModel();
  }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.register(this.formModel).subscribe( () => {
      this.notificationsService.success("Success", "New user registered " + this.formModel.fullName);
      this.router.navigate(['sign-in']);
      this.clearForm();
    })
  }

  clearForm(){
    this.formModel = new SignUpFormModel();
  }

}
