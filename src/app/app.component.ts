import {Component} from '@angular/core';
import {UserService} from "./shared/services/user.service";
import {KudosService} from "./shared/services/kudos.service";
import {LeadersService} from "./shared/services/leaders.service";
import {NotificationService} from "./shared/components/notification/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService, KudosService, LeadersService, NotificationService]
})
export class AppComponent {
  title = 'app works!';
  options = {
    position: ["bottom", "right"],
    timeOut: 3000
  }
}
