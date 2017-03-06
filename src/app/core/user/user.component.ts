import { Component, OnInit } from '@angular/core';
import {Params, Router, ActivatedRoute} from "@angular/router";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isReady: boolean;
  userId: string;
  user: any;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
    this.isReady = false;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.userId = params['id'];
      this.userService.getUserProfile(this.userId).subscribe(user => {
        this.user = user;
        this.isReady = true;
      })
    });
  }

}
