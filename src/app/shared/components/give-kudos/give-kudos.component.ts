import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../services/home.service";
import {KudosService} from "../../services/kudos.service";
import {NotificationsService} from "angular2-notifications";
declare var jQuery: any;

@Component({
    selector: 'app-give-kudos',
    templateUrl: './give-kudos.component.html',
    styleUrls: ['./give-kudos.component.scss'],
    providers: [KudosService]
})
export class GiveKudosComponent implements OnInit {

    showGiveForm = false;
    showErrorMessage = false;
    errorMessage: string;

    predicatedEmails = [];
    showPredicates: boolean;

    receiverEmail: string;
    kudosAmount: number;
    kudosMessage: string;

    constructor(private homeService: HomeService, private kudosService: KudosService, private notificationService: NotificationsService) {
    }

    ngOnInit() {
        this.showPredicates = false;
        this.receiverEmail = '';
        this.kudosAmount = 1;
        this.kudosMessage = '';
    }

    onSubmit() {
        this.kudosService.giveKudos(this.receiverEmail, this.kudosAmount, this.kudosMessage).subscribe(
            response => {
                this.notificationService.success('Success', 'Kudos sent', true);
                jQuery('#giveKudosModal').modal('hide');
            },
            error => this.notificationService.error('Error', 'Kudos was not sent', true)
        )
    }

    toggleGiveForm() {
        this.showGiveForm = !this.showGiveForm;
    }

    predicateEmail() {
        if (this.receiverEmail.length > 2) {
            this.homeService.getEmailPredicates(this.receiverEmail).subscribe(
                resp => this.predicatedEmails = resp
            );
            this.showPredicates = true;
        } else {
            this.showPredicates = false;
        }
    }

    selectReceiver(receiver) {
        this.receiverEmail = receiver;
        this.showPredicates = false;
    }

    getFormValues(): any {
        return {
            receiverEmail: this.receiverEmail,
            amount: this.kudosAmount,
            message: this.kudosMessage
        }
    }

}
