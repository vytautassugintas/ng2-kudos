import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
export class NotificationService {

  private notification = {
    title: "",
    message: ""
  };
  notificationSource: Subject<any>;
  notificationFired$: any;

  constructor() {
    this.notificationSource = new Subject<any>();
    this.notificationFired$ = this.notificationSource.asObservable();
  }

  notificationFired(notification: any){
    this.notificationSource.next(notification);
  }

  success(title, message){
    this.notification.title = title;
    this.notification.message = message;
    this.notificationFired(this.notification);
  }

}
