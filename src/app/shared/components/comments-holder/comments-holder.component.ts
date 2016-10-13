import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {ChallengesService} from "../../services/challenges.service";

@Component({
  selector: 'kudos-comments-holder',
  templateUrl: './comments-holder.component.html',
  styleUrls: ['./comments-holder.component.scss']
})
export class CommentsHolderComponent implements OnInit {

  @Input() id;
  @Input() index;

  page: number;
  pageSize: number;

  commentsList = [];

  constructor(private challengesService: ChallengesService) { }

  ngOnInit() {
    this.page = 0;
    this.pageSize = 5;
    this.getComments(this.page, this.pageSize);
  }

  getComments(page: number, pageSize: number) {
    this.challengesService.getComments(this.id, page, pageSize).subscribe(
        response => {
          this.commentsList = response.content;
        }
    )
  }

}
