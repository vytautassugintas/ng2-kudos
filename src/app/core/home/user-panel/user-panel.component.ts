import {UserService} from "../../../shared/services/user.service";
import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  isReady: boolean;
  currentUser: any;
  userSubscription: Subscription;

  constructor(private userService: UserService) {
    this.isReady = false;
    this.currentUser = {};
    this.userSubscription = userService.userUpdated$.subscribe(
      user => {
        this.currentUser = user;
      });
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      user => {
        this.currentUser = user;
        this.isReady = true;
      },
      error => {

      }
    )
  }

}
