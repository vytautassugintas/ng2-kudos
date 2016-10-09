import { Component, OnInit } from '@angular/core';
import {ChallengesService} from "../../shared/services/challenges.service";

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss'],
  providers: [ChallengesService]
})
export class ChallengeComponent implements OnInit {

  page: number;
  pageSize: number;

  showLoader: boolean;

  challengesList: any;

  constructor(private challengesService: ChallengesService) { }

  ngOnInit() {
    this.page = 0;
    this.pageSize = 5;
    this.showLoader = false;
    this.loadChallengesHistory();
  }

  loadChallengesHistory(){
    this.showLoader = true;
    this.challengesService.getHistory(this.page, this.pageSize).subscribe(
        resp => {
          this.challengesList = resp.content;
          this.showLoader = false;
        }
    )
  }

  loadAccomplishedChallengesHistory(){
    this.showLoader = true;
    this.challengesService.getAccomplishedHistory(this.page, this.pageSize).subscribe(
        resp => {
          this.challengesList = resp.content;
          this.showLoader = false;
        }
    )
  }

  loadFailedChallengesHistory(){
    this.showLoader = true;
    this.challengesService.getFailedHistory(this.page, this.pageSize).subscribe(
        resp => {
          this.challengesList = resp.content;
          this.showLoader = false;
        }
    )
  }

}
