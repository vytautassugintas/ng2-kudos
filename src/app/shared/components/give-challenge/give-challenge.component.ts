import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../services/home.service";
import {ChallengesService} from "../../services/challenges.service";
import {NotificationsService} from "angular2-notifications";
declare var jQuery: any;

@Component({
    selector: 'kudos-give-challenge',
    templateUrl: './give-challenge.component.html',
    styleUrls: ['./give-challenge.component.scss']
})
export class GiveChallengeComponent implements OnInit {

    showPredicates: boolean;
    predicatedEmails: any;

    receiverEmail: string;
    challengeAmount: number;
    challengeTitle: string;
    challengeDescription: string;

    showErrorMessage: boolean;
    errorMessage: string;

    constructor(private homeService: HomeService, private challengesService: ChallengesService, private notificationService: NotificationsService) {
    }

    ngOnInit() {
        this.showPredicates = false;
        this.showErrorMessage = false;
    }

    onSubmit() {
        this.challengesService.sendChallenge(this.getFormValues()).subscribe(
            resp => {
                jQuery('#giveChallengeModal').modal('hide');
                this.notificationService.success('Success', 'Challenge sent', true);
                this.challengesService.challengeSent(resp);
            },
            error => this.handleFormError(error)
        )
    }

    predicateEmail() {
        if (this.receiverEmail.length < 2) {
            this.showPredicates = false;
        } else {
            this.homeService.getEmailPredicates(this.receiverEmail).subscribe(
                resp => {
                    this.predicatedEmails = resp;
                    this.showPredicates = this.predicatedEmails.length > 0;
                },
                error => this.showPredicates = false
            );
        }
    }

    selectReceiver(receiver) {
        this.receiverEmail = receiver;
        this.showPredicates = false;
    }

    handleFormError(error: any) {
        let errorJson = JSON.parse(error);

        if (errorJson.fieldError){
            this.showError(errorJson.fieldError.message);
        }

        if (errorJson.fieldErrors){
            this.showError(errorJson.fieldErrors[0].message);
        }
    }

    showError(message: string) {
        this.showErrorMessage = true;
        this.errorMessage = message;
    }

    getFormValues(): any {
        return {
            receiverEmail: this.receiverEmail,
            name: this.challengeTitle,
            description: this.challengeDescription,
            expirationDate: null,
            amount: this.challengeAmount
        }
    }

}
