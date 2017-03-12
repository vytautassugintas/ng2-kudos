import { Component } from '@angular/core';
import {UserService} from "./shared/services/user.service";
import {KudosService} from "./shared/services/kudos.service";
import {LeadersService} from "./shared/services/leaders.service";
import {NotificationsService} from "angular2-notifications/lib/notifications.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService, KudosService, LeadersService, NotificationsService]
})
export class AppComponent {
  title = 'app works!';
  options = {
    position: ["bottom", "right"],
    timeOut: 3000
  }
}
