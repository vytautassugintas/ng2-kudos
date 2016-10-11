import {Component, OnInit} from '@angular/core';
import {ChallengesService} from "../../../../shared/services/challenges.service";
import {Subscription} from "rxjs";

declare var jQuery: any;

@Component({
    selector: 'kudos-new-challenges',
    templateUrl: './new-challenges.component.html',
    styleUrls: ['./new-challenges.component.scss']
})
export class NewChallengesComponent implements OnInit {

    showLoader: boolean;

    subscription: Subscription;

    newChallengesList: any;
    newChallengesTotalSize: number;

    page: number;
    pageSize: number;
    isFirstPage: boolean;
    isLastPage: boolean;

    constructor(private challengesService: ChallengesService) {
        this.subscription = challengesService.challengeSent$.subscribe(
            mission => {
                this.newChallengesTotalSize++;
                this.newChallengesList.unshift(mission);
                if (this.newChallengesList.length > 4) {
                    this.newChallengesList.pop();
                }
            });
    }

    ngOnInit() {
        this.showLoader = false;
        this.page = 0;
        this.pageSize = 3;

        this.loadNewChallenges(this.page, this.pageSize);
    }

    loadNewChallenges(page:number, pageSize:number){
        this.showLoader = true;
        this.challengesService.getNewChallenges(page, pageSize).subscribe(
            resp => {
                this.newChallengesList = resp.content;
                this.newChallengesTotalSize = resp.totalElements;
                this.isFirstPage = resp.first;
                this.isLastPage = resp.last;
                this.showLoader = false;
            }
        )
    }

    loadNextPage(){
        if (!this.isLastPage){
            this.page++;
            this.loadNewChallenges(this.page, this.pageSize);
        }
    }

    loadPreviousPage(){
        if (!this.isFirstPage){
            this.page--;
            this.loadNewChallenges(this.page, this.pageSize);
        }
    }

    removeChallenge(index: any) {
        this.newChallengesTotalSize--;
        this.newChallengesList.splice(index, 1);

        if (this.newChallengesTotalSize > 3){
            this.loadNewChallenges(this.page, this.pageSize);
        }
    }

}
