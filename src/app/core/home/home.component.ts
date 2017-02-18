import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

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
