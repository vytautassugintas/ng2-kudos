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
    //initDataHere
  }

  get id(): string {
    return this._id;
  }

  userKudosCollection = [];

  showLoader: boolean;

  page: number;
  pageSize: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;

  constructor(private challengesService: ChallengesService) { }

  ngOnInit() {

  }

  getUserKudosHistory(userId: string, page: number, pageSize: number){

  }

}