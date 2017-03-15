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
  user: any;
  userSubscription: Subscription;
  experiencePointsPercentage = 0;

  constructor(private userService: UserService) {
    this.isReady = false;
    this.user = {};
    this.userSubscription = userService.userUpdated$.subscribe(
      user => {
        this.increaseUserExperiencePoints((this.user.weeklyKudos - user.weeklyKudos) * 2);
        this.user = user;
      });
  }

  ngOnInit() {
    this.getUserInformation();
  }

  getUserInformation() {
    this.userService.getCurrentUser().subscribe(
      user => {
        this.user = user;
        this.isReady = true;
        this.calculateExperiencePointsPercentage(user.experiencePoints, user.experiencePointsToLevelUp, user.previousLevelExperiencePoints);
      });
  }

  calculateExperiencePointsPercentage(number, amount, previous) {
    let percentage = (number - previous) / (amount - previous) * 100;
    if (percentage <= 100) {
      this.experiencePointsPercentage = (number - previous) / (amount - previous) * 100;
    } else {
      this.experiencePointsPercentage = 100;
    }
  }

  increaseUserExperiencePoints(experiencePoints) {
    this.user.experiencePoints += experiencePoints;
    this.calculateExperiencePointsPercentage(this.user.experiencePoints, this.user.experiencePointsToLevelUp, this.user.previousLevelExperiencePoints);
    if (this.user.experiencePoints >= this.user.experiencePointsToLevelUp) {
      setTimeout(() => {
        this.experiencePointsPercentage = 0;
        this.getUserInformation();
      }, 800);
    }
  }

}
