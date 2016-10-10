import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Challenge} from "../../../../shared/models/challenge";
import {ChallengesService} from "../../../../shared/services/challenges.service";
import {Subscription} from "rxjs";
import {NotificationsService} from "angular2-notifications";

@Component({
    selector: 'kudos-challenge-item',
    templateUrl: './challenge-item.component.html',
    styleUrls: ['./challenge-item.component.scss']
})
export class ChallengeItemComponent implements OnInit {

    @Input() challenge: any;
    @Input() index: any;

    @Output() removeRequest = new EventEmitter();

    subscription: Subscription;

    constructor(private challengesService: ChallengesService, private notificationService: NotificationsService) {
        this.subscription = challengesService.challengeAccepted$.subscribe(
            mission => {
                console.log("FROM ITEM")
            });
    }

    ngOnInit() {
        this.challenge = new Challenge(this.challenge);
    }

    accept() {
        this.challengesService.acceptChallenge(this.challenge.id).subscribe(
            response => {
                this.challenge.actions.acceptAllowed = false;
                this.challenge.actions.declineAllowed = false;
                this.challengesService.acceptChallenge(this.challenge);
                this.notifyUserAndRequestRemove('Challenge accepted');
            }
        );
    }

    decline() {
        this.challengesService.declineChallenge(this.challenge.id).subscribe(
            response => {
                this.notifyUserAndRequestRemove('Challenge declined');
            }
        );
    }

    cancel() {
        this.challengesService.cancelChallenge(this.challenge.id).subscribe(
            response => {
                this.notifyUserAndRequestRemove('Challenge canceled ');
            }
        );
    }

    complete() {
        this.challengesService.completeChallenge(this.challenge.id).subscribe(
            response => {
                this.notifyUserAndRequestRemove('Challenge completed');
            }
        );
    }

    markAsFailed() {
        this.challengesService.markAsFailedChallenge(this.challenge.id).subscribe(
            response => {
                this.notifyUserAndRequestRemove('Failed challenge');
            }
        );
    }

    private notifyUserAndRequestRemove(action: string) {
        this.notificationService.success('Success', action, true);
        this.removeRequest.emit(this.index);
    }

}
