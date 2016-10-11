import {Component, OnInit, Input} from '@angular/core';
import {KudosService} from "../../services/kudos.service";

@Component({
    selector: 'kudos-user-kudos-history',
    templateUrl: './user-kudos-history.component.html',
    styleUrls: ['./user-kudos-history.component.scss'],
    providers: [KudosService]
})
export class UserKudosHistoryComponent implements OnInit {

    private _id: string;

    @Input()
    set id(value: string) {
        this._id = value;
        this.initHistory(this._id);
    }

    userKudosCollection = [];

    showLoader: boolean;
    page: number;
    pageSize: number;

    constructor(private kudosService: KudosService) {
    }

    ngOnInit() {
        this.initHistory(this._id);
    }

    getUserKudosHistory(userId) {
        this.kudosService.getUserHistory(userId, this.page, this.pageSize).subscribe(
            response => {
                this.userKudosCollection = response.content;
                this.showLoader = false;
            },
            error => this.userKudosCollection = []
        )
    }

    initHistory(userId) {
        this.showLoader = true;
        this.page = 0;
        this.pageSize = 10;
        this.getUserKudosHistory(userId);
    }

    get id(): string {
        return this._id;
    }

}
