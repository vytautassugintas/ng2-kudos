import {Component, OnInit, Input} from '@angular/core';
import {User} from "../../../shared/models/user";
import {NotificationsService} from "angular2-notifications";
import {HomeService} from "../../../shared/services/home.service";
import {AuthenticationService} from "../../../shared/services/authentication.service";
declare var jQuery: any;

@Component({
  selector: 'kudos-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  @Input() user: User;
  @Input() showSettings: boolean;

  userNewPassword: string = '';
  showPasswordError: boolean = false;
  passwordError: string = '';
  showPassword: boolean = false;

  isSubscribing: boolean;

  constructor(private notificationService: NotificationsService, private homeService: HomeService, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  setCurrentUser(resp) {
    this.user = new User(resp);
    this.isSubscribing = this.user.subscribing;
  }

  changeSubscription() {
    this.homeService.changeSubscription(this.isSubscribing).subscribe(
        resp => this.notificationService.success('Success', 'Saved', true)
    )
  }

  changePassword() {
    console.log(this.userNewPassword);
    if (this.userNewPassword.length > 4) {
      this.showPasswordError = false;
      this.authService.changePassword(this.userNewPassword).subscribe(
          resp => {
            jQuery('#settingsModal').modal('hide');
            this.notificationService.success('Success', 'Password changed', true);
            this.userNewPassword = '';
          }
      )
    } else {
      this.showPasswordError = true;
      this.passwordError = 'Password too short. Enter more than 5 symbols'
    }
  }

}
