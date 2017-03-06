import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  isReady: boolean;
  currentUser: any;

  constructor(private userService: UserService) {
    this.isReady = false;
  }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
    this.isReady = true;
  }

}
