import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../shared/services/home.service";
import {User} from "../../shared/models/user";
import {ChallengesService} from "../../shared/services/challenges.service";

@Component({
  selector: 'kudos-home-rework',
  templateUrl: './home-rework.component.html',
  styleUrls: ['./home-rework.component.scss'],
  providers: [HomeService, ChallengesService]
})
export class HomeReworkComponent implements OnInit {

  user: User;
  usersActions: any;
  userLoading: boolean;

  constructor(private homeService: HomeService, private challengesService: ChallengesService) { }

  ngOnInit() {
    this.userLoading = true;
    this.homeService.home().subscribe(
        resp => {
          this.setCurrentUser(resp);
          this.userLoading = false;
          this.homeService.actions(this.user.id, 0, 5).subscribe(
              resp => this.usersActions = resp
          )
        }
    );
  }

  setCurrentUser(resp) {
    this.user = new User(resp);
  }

}
