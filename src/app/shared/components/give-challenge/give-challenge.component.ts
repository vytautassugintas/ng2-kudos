import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../services/home.service";
import {ChallengesService} from "../../services/challenges.service";
declare var jQuery: any;

@Component({
    selector: 'kudos-give-challenge',
    templateUrl: './give-challenge.component.html',
    styleUrls: ['./give-challenge.component.scss'],
    providers: [HomeService, ChallengesService]
})
export class GiveChallengeComponent implements OnInit {

    showPredicates: boolean;
    predicatedEmails: any;

    challengeReceiverEmail: string;
    challengeAmount: number;
    challengeTitle: string;
    challengeDescription: string;

    constructor(private homeService: HomeService, private challengesService: ChallengesService) {
    }

    ngOnInit() {
        this.showPredicates = false;
        this.challengeReceiverEmail = '';
        this.challengeTitle = '';
        this.challengeDescription = '';
        this.challengeAmount = 1;
    }

    onSubmit() {
        this.challengesService.sendChallenge(this.getFormValues()).subscribe(
            resp => console.log(resp),
            error => console.log(error)
        )
    }

    predicateEmail() {
        if (this.challengeReceiverEmail.length > 2) {
            this.homeService.getEmailPredicates(this.challengeReceiverEmail).subscribe(
                resp => this.predicatedEmails = resp
            )
            this.showPredicates = true;
        } else {
            this.showPredicates = false;
        }
    }

    selectReceiver(receiver) {
        this.challengeReceiverEmail = receiver;
        this.showPredicates = false;
    }

    getFormValues(): any {
        return {
            receiverEmail: this.challengeReceiverEmail,
            name: this.challengeTitle,
            description: this.challengeDescription,
            expirationDate: null,
            amount: this.challengeAmount
        }
    }

}
