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
    totalPages: number;
    isFirstPage: boolean;
    isLastPage: boolean;

    constructor(private kudosService: KudosService) {
    }

    ngOnInit() {
        this.initHistory(this._id);
    }

    getUserKudosHistory(userId, page, pageSize) {
        this.showLoader = true;
        this.kudosService.getUserHistory(userId, page, pageSize).subscribe(
            response => {
                this.userKudosCollection = response.content;
                this.showLoader = false;
                this.isFirstPage = response.first;
                this.isLastPage = response.last;
                this.totalPages = response.totalPages;
            },
            error => this.userKudosCollection = []
        )
    }

    loadNextPage(){
        if (!this.isLastPage){
            this.page++;
            this.getUserKudosHistory(this._id, this.page, this.pageSize);
        }
    }

    loadPreviousPage(){
        if (!this.isFirstPage){
            this.page--;
            this.getUserKudosHistory(this._id, this.page, this.pageSize);
        }
    }

    changePageSize(size){
        this.page = 0;
        this.pageSize = size;
        this.getUserKudosHistory(this._id, this.page, this.pageSize);
    }

    initHistory(userId) {
        this.showLoader = true;
        this.page = 0;
        this.pageSize = 10;
        this.isFirstPage = false;
        this.isLastPage = false;
        this.totalPages = 0;
        this.getUserKudosHistory(userId, this.page, this.pageSize);
    }

    get id(): string {
        return this._id;
    }

}
