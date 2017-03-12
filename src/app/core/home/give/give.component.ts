import {Component, OnInit} from '@angular/core';
import {GiveKudosFormModel} from "../../../shared/models/GiveKudosFormModel";
import {KudosService} from "../../../shared/services/kudos.service";
import {NotificationsService} from "angular2-notifications/lib/notifications.service";
import {UserService} from "../../../shared/services/user.service";
import {NotificationService} from "../../../shared/components/notification/notification.service";

@Component({
  selector: 'app-give',
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.scss'],
  providers: [KudosService]
})
export class GiveComponent implements OnInit {

  isReady: boolean;
  isExpanded: boolean;
  hasErrors: boolean;
  errorMessage: string;
  formModel: GiveKudosFormModel;

  constructor(private kudosService: KudosService, private userService: UserService, private notificationService: NotificationService) {
    this.isReady = true;
    this.isExpanded = false;
    this.hasErrors = false;
    this.errorMessage = null;
    this.formModel = new GiveKudosFormModel();
  }

  ngOnInit() {
    this.isExpanded = false;
    this.isReady = true;
  }

  onSubmit() {
    this.clearErrors();
    this.kudosService.give(this.formModel).subscribe(response => {
      this.notificationService.success("Success", response.amount + " kudos sent to " + response.receiverFullName);
      this.userService.currentUser.weeklyKudos -= this.formModel.amount;
      this.userService.currentUser.experiencePoints += this.formModel.amount * 2;
      this.userService.updateUser(this.userService.currentUser);
      this.clearForm();
    }, error => {
      console.log(error);
      if (error.fieldError) {
        this.hasErrors = true;
        this.errorMessage = error.fieldError.message;
      }
    })
  }

  onClearClick() {
    this.clearForm();
    this.clearErrors();
  }

  onExpandToggle() {
    this.isExpanded === false ? this.isExpanded = true : this.isExpanded = false;
  }

  clearForm() {
    this.formModel = new GiveKudosFormModel();
  }

  clearErrors() {
    this.hasErrors = false;
    this.errorMessage = "";
  }

}
