import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../shared/services/authentication.service";
import {NotificationsService} from "angular2-notifications";
declare var jQuery: any;

@Component({
  selector: 'recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  email: string;

  constructor(private authService: AuthenticationService, private notificationService: NotificationsService) {
  }

  ngOnInit() {
    this.email = '';
  }

  onSubmit(){
    this.authService.reset(this.email).subscribe(
        response => {
          this.email = '';
          jQuery('#forgot-password-modal').modal('hide');
          this.notificationService.success('Success', 'Check your email for new password', true);
        },
        error => {
          jQuery('#forgot-password-modal').modal('hide');
          this.notificationService.success('Error', 'Something bad happened', true);
        }
    )
  }

}
