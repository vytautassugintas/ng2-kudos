import {Component, OnInit} from '@angular/core';
import {ChallengesService} from "../../../../shared/services/challenges.service";

declare var jQuery: any;

@Component({
    selector: 'kudos-new-challenges',
    templateUrl: './new-challenges.component.html',
    styleUrls: ['./new-challenges.component.scss'],
    providers: [ChallengesService]
})
export class NewChallengesComponent implements OnInit {

    newChallengesList: any;
    newChallengesTotalSize: number;

    constructor(private challengesService: ChallengesService) {
    }

    ngOnInit() {
        this.challengesService.getNewChallenges(0, 5).subscribe(
            resp => {
                this.newChallengesList = resp.content;
                this.newChallengesTotalSize = resp.totalElements
            }
        )
    }


    getNewChallenges() {

    }

    removeChallenge(index: any) {
        console.log(index);
        this.newChallengesList.splice(index, 1);
    }

}
