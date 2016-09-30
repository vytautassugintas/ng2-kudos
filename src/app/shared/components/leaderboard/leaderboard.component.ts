import {Component, OnInit} from '@angular/core';
import {LeaderboardService} from "../../services/leaderboard.service";

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.scss'],
    providers: [LeaderboardService]
})
export class LeaderboardComponent implements OnInit {

    constructor(private leaderboardService: LeaderboardService) {
    }

    topUsers: any;
    topReceiversSelected: boolean;

    ngOnInit() {
        this.getTopReceivers("");
    }

    getTopReceivers(periodInDays: string) {
        this.topReceiversSelected = true;
        this.leaderboardService.getTopReceivers(periodInDays).subscribe(
            resp => this.topUsers = resp
        )
    }

    getTopSenders(periodInDays: string) {
        this.topReceiversSelected = false;
        this.leaderboardService.getTopSenders(periodInDays).subscribe(
            resp => this.topUsers = resp
        )
    }

    getTop(periodInDays: string){
        if(this.topReceiversSelected) {
            this.getTopReceivers(periodInDays)
        }else{
            this.getTopSenders(periodInDays)
        }
    }

}
