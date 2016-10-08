import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../services/home.service";
declare var jQuery: any;

@Component({
    selector: 'kudos-give-challenge',
    templateUrl: './give-challenge.component.html',
    styleUrls: ['./give-challenge.component.scss'],
    providers: [HomeService]
})
export class GiveChallengeComponent implements OnInit {

    showPredicates: boolean;
    predicatedEmails: any;

    challengeReceiverEmail: string;
    challengeAmount: number;

    constructor(private homeService: HomeService) {
    }

    ngOnInit() {
        this.showPredicates = false;
        this.challengeReceiverEmail = '';
        this.challengeAmount = 1;
    }

    onSubmit() {

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

    selectReceiver(receiver){
        this.challengeReceiverEmail = receiver;
        this.showPredicates = false;
    }

}
