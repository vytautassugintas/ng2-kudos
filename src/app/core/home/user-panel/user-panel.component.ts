import { UserService } from "../../../shared/services/user.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  isReady: boolean;
  currentUser: any;

  constructor(private userService: UserService) {
    this.isReady = false;
    this.currentUser = {};
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
