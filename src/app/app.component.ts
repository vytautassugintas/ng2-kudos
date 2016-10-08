import { Component } from '@angular/core';
import './rxjs-operators'
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  public options = {
    timeOut: 4000,
    showProgressBar: false
  };

  constructor(private notificationService: NotificationsService){}
}
