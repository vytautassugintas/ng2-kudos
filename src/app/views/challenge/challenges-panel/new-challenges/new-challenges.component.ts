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

    subscription: Subscription;

    newChallengesList: any;
    newChallengesTotalSize: number;

    page: number;
    pageSize: number;
    isFirstPage: boolean;
    isLastPage: boolean;

    constructor(private challengesService: ChallengesService) {
        this.subscription = challengesService.missionConfirmed$.subscribe(
            mission => {
                this.newChallengesTotalSize++;
                this.newChallengesList.unshift(mission);
                if (this.newChallengesList.length > 4) {
                    this.newChallengesList.pop();
                }
            });
    }

    ngOnInit() {
        this.page = 0;
        this.pageSize = 5;

        this.loadNewChallenges(this.page, this.pageSize);
    }

    getNewChallenges() {

    }

    loadNewChallenges(page:number, pageSize:number){
        this.challengesService.getNewChallenges(page, pageSize).subscribe(
            resp => {
                this.newChallengesList = resp.content;
                this.newChallengesTotalSize = resp.totalElements;
                this.isFirstPage = resp.first;
                this.isLastPage = resp.last;
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

        if (this.newChallengesTotalSize > 5){
            this.loadNewChallenges(this.page, this.pageSize);
        }
    }

}
