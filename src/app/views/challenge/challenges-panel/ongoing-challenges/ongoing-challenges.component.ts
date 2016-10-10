import {Component, OnInit} from '@angular/core';
import {ChallengesService} from "../../../../shared/services/challenges.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'kudos-ongoing-challenges',
    templateUrl: './ongoing-challenges.component.html',
    styleUrls: ['./ongoing-challenges.component.scss']
})
export class OngoingChallengesComponent implements OnInit {

    showLoader: boolean;

    ongoingChallengesList: any;
    ongoingChallengesTotalSize: number;

    page: number;
    pageSize: number;
    isFirstPage: boolean;
    isLastPage: boolean;

    subscription: Subscription;

    constructor(private challengesService: ChallengesService) {
        this.subscription = challengesService.challengeAccepted$.subscribe(
            mission => {
                this.ongoingChallengesTotalSize++;
                this.ongoingChallengesList.unshift(mission);
                if (this.ongoingChallengesList.length >= 4) {
                    this.ongoingChallengesList.pop();
                }
            });
    }

    ngOnInit() {
        this.showLoader = true;
        this.page = 0;
        this.pageSize = 3;
        this.loadOngoingChallenges(this.page, this.pageSize);
    }

    removeChallenge(index: any) {
        this.ongoingChallengesTotalSize--;
        this.ongoingChallengesList.splice(index, 1);

        if (this.ongoingChallengesTotalSize > 3){
            this.loadOngoingChallenges(this.page, this.pageSize);
        }
    }

    loadOngoingChallenges(page:number, pageSize:number){
        this.showLoader = true;
        this.challengesService.getOngoingChallenges(page, pageSize).subscribe(
            resp => {
                this.ongoingChallengesList = resp.content;
                this.ongoingChallengesTotalSize = resp.totalElements;
                this.isFirstPage = resp.first;
                this.isLastPage = resp.last;
                this.showLoader = false;
            }
        )
    }

    loadNextPage(){
        if (!this.isLastPage){
            this.page++;
            this.loadOngoingChallenges(this.page, this.pageSize);
        }
    }

    loadPreviousPage(){
        if (!this.isFirstPage){
            this.page--;
            this.loadOngoingChallenges(this.page, this.pageSize);
        }
    }

}
