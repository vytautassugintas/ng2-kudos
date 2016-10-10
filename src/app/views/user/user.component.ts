import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {HomeService} from "../../shared/services/home.service";
import {User} from "../../shared/models/user";

@Component({
  selector: 'kudos-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [HomeService]
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private homeService: HomeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id']; // (+) converts string 'id' to a number
      this.getUserProfile(id);
    });
  }

  getUserProfile(userId){
    this.homeService.userProfile(userId).subscribe(
        user => this.user = new User(user)
    )
  }

}
