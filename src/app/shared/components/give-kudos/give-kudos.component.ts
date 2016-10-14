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

    showErrorMessage: boolean;
    errorMessage: string;

    predicatedEmails = [];
    showPredicates: boolean;

    receiverEmail: string;
    kudosMessage: string;
    kudosAmount: number;

    constructor(private homeService: HomeService, private kudosService: KudosService, private notificationService: NotificationsService) {
    }

    ngOnInit() {
        this.showErrorMessage = false;
        this.showPredicates = false;
    }

    onSubmit() {
        this.kudosService.giveKudos(this.receiverEmail, this.kudosAmount, this.kudosMessage).subscribe(
            response => {
                this.notificationService.success('Success', 'Kudos sent', true);
                jQuery('#giveKudosModal').modal('hide');
                this.clearForm();
            },
            error => {
                this.notificationService.error('Error', 'Kudos was not sent', true);
                this.handleFormError(error);
            })
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

    clearForm() {
        this.receiverEmail = null;
        this.kudosMessage = null;
        this.kudosAmount = null;
        this.clearErrors();
    }

    clearErrors() {
        this.showErrorMessage = false;
        this.errorMessage = '';
    }

}
