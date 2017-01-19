import {Component, OnInit} from '@angular/core';
import {ChallengesService} from "../../shared/services/challenges.service";
import {HomeService} from "../../shared/services/home.service";
import {User} from "../../shared/models/user";

@Component({
    selector: 'app-challenge',
    templateUrl: './challenge.component.html',
    styleUrls: ['./challenge.component.scss'],
    providers: [ChallengesService, HomeService]
})
export class ChallengeComponent implements OnInit {

    user: User;

    page: number;
    pageSize: number;

    showLoader: boolean;

    challengesList: any;

    constructor(private challengesService: ChallengesService, private homeService: HomeService) {
    }

    ngOnInit() {
        this.page = 0;
        this.pageSize = 5;
        this.showLoader = false;
        this.loadChallengesHistory();
        this.loadUser();
    }

    loadUser() {
        this.homeService.home().subscribe(
            user => this.user = new User(user)
        )
    }

    loadChallengesHistory() {
        this.showLoader = true;
        this.challengesService.getHistory(this.page, this.pageSize).subscribe(
            resp => {
                this.challengesList = resp.content;
                this.showLoader = false;
            }
        )
    }

    loadAccomplishedChallengesHistory() {
        this.showLoader = true;
        this.challengesService.getAccomplishedHistory(this.page, this.pageSize).subscribe(
            resp => {
                this.challengesList = resp.content;
                this.showLoader = false;
            }
        )
    }

    loadFailedChallengesHistory() {
        this.showLoader = true;
        this.challengesService.getFailedHistory(this.page, this.pageSize).subscribe(
            resp => {
                this.challengesList = resp.content;
                this.showLoader = false;
            }
        )
    }

}
