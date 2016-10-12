import { Component, OnInit } from '@angular/core';
import {ChallengesService} from "../../services/challenges.service";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'kudos-user-challenges-history',
  templateUrl: './user-challenges-history.component.html',
  styleUrls: ['./user-challenges-history.component.scss']
})
export class UserChallengesHistoryComponent implements OnInit {

  private _id: string;

  @Input()
  set id(value: string) {
    this._id = value;
    this.initHistory(this._id);
  }

  get id(): string {
    return this._id;
  }

  userChallengesCollection = [];

  showLoader: boolean;

  page: number;
  pageSize: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;

  constructor(private challengesService: ChallengesService) { }

  ngOnInit() {
    this.initHistory(this._id);
  }

  getUserChallengesHistory(userId: string, page: number, pageSize: number, type: string){
    this.challengesService.getUserChallengesHistory(userId, page, pageSize, type).subscribe(
        response => {
          this.userChallengesCollection = response.content;
          this.showLoader = false;
          this.isFirstPage = response.first;
          this.isLastPage = response.last;
          this.totalPages = response.totalPages;
        }
    )
  }

  initHistory(userId) {
    this.showLoader = true;
    this.page = 0;
    this.pageSize = 10;
    this.isFirstPage = false;
    this.isLastPage = false;
    this.totalPages = 0;
    this.getUserChallengesHistory(userId, this.page, this.pageSize, 'all');
  }

}