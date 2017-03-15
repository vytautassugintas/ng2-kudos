import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {NotificationService} from "./notification.service";
import {setTimeout} from "timers";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notification: any;
  showNotification: boolean;
  notificationSubscription: Subscription;

  constructor(private notificationService: NotificationService) {
    this.showNotification = false;

    this.notificationSubscription = notificationService.notificationFired$.subscribe(
      notification => {
        this.notification = notification;
        this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
        }, 5000)
      });
  }

  ngOnInit() {
  }

}
