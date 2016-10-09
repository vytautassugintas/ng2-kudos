import {Component, OnInit} from '@angular/core';
import {LeaderboardService} from "../../services/leaderboard.service";

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.scss'],
    providers: [LeaderboardService]
})
export class LeaderboardComponent implements OnInit {

    showLoader: boolean;

    constructor(private leaderboardService: LeaderboardService) {
    }

    topUsers: any;
    topReceiversSelected: boolean;

    ngOnInit() {
        this.showLoader = true;
        this.getTopReceivers("");
    }

    getTopReceivers(periodInDays: string) {
        this.topReceiversSelected = true;
        this.showLoader = true;
        this.leaderboardService.getTopReceivers(periodInDays).subscribe(
            resp => {
                this.topUsers = resp;
                this.showLoader = false;
            }
        )
    }

    getTopSenders(periodInDays: string) {
        this.topReceiversSelected = false;
        this.showLoader = true;
        this.leaderboardService.getTopSenders(periodInDays).subscribe(
            resp => {
                this.topUsers = resp;
                this.showLoader = false;
            }
        )
    }

    getTop(periodInDays: string) {
        if (this.topReceiversSelected) {
            this.getTopReceivers(periodInDays)
        } else {
            this.getTopSenders(periodInDays)
        }
    }

}
