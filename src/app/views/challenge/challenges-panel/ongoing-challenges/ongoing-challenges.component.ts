import {Component, OnInit} from '@angular/core';
import {ChallengesService} from "../../../../shared/services/challenges.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'kudos-ongoing-challenges',
    templateUrl: './ongoing-challenges.component.html',
    styleUrls: ['./ongoing-challenges.component.scss']
})
export class OngoingChallengesComponent implements OnInit {

    ongoingChallengesList: any;
    ongoingChallengesTotalSize: number;

    page: number;
    pageSize: number;
    isFirstPage: boolean;
    isLastPage: boolean;

    subscription: Subscription;

    constructor(private challengesService: ChallengesService) {
        this.subscription = challengesService.missionAnnounced$.subscribe(
            mission => {
                this.ongoingChallengesTotalSize++;
                this.ongoingChallengesList.unshift(mission);
                if (this.ongoingChallengesList.length >= 4) {
                    this.ongoingChallengesList.pop();
                }
            });
    }

    ngOnInit() {
        this.page = 0;
        this.pageSize = 5;
        this.loadOngoingChallenges(this.page, this.pageSize);
    }

    removeChallenge(index: any) {
        this.ongoingChallengesTotalSize--;
        this.ongoingChallengesList.splice(index, 1);
    }

    loadOngoingChallenges(page:number, pageSize:number){
        this.challengesService.getOngoingChallenges(page, pageSize).subscribe(
            resp => {
                this.ongoingChallengesList = resp.content;
                this.ongoingChallengesTotalSize = resp.totalElements;
                this.isFirstPage = resp.first;
                this.isLastPage = resp.last;
            }
        )
    }

    loadNextPage(){
        if (!this.isLastPage){
            this.page++;
            this.loadOngoingChallenges(this.page, this.pageSize);
        }
    }

    loadPreviuosPage(){
        if (!this.isFirstPage){
            this.page--;
            this.loadOngoingChallenges(this.page, this.pageSize);
        }
    }

}
