import {Component, OnInit, Input} from '@angular/core';
import {KudosService} from "../../../shared/services/kudos.service";

@Component({
  selector: 'app-history-panel',
  templateUrl: './history-panel.component.html',
  styleUrls: ['./history-panel.component.scss']
})
export class HistoryPanelComponent implements OnInit {

  private _id: string;

  selectedHistory: string;
  transactions: Array<any>;
  isReady: boolean;

  isFirstPage: boolean;
  isLastPage: boolean;
  totalPages: number;
  currentPage: number;
  buttonsDisabled: boolean;

  @Input()
  set id(value: string) {
    this._id = value;
    this.isReady = false;
    this.getAllHistory(this._id);
  }

  constructor(private kudosService: KudosService) {
    this.isReady = false;
    this.currentPage = 1;
    this.selectedHistory = "";
    this.transactions = [];
    this.buttonsDisabled = true;
  }

  ngOnInit() {

  }

  getAllHistory(id: string){
    this.selectedHistory = "ALL";
    this.kudosService.getUserHistory(id, this.currentPage - 1, 10)
      .subscribe(transactions => this.extractTransactions(transactions));
  }

  getGivenHistory(id: string){
    this.selectedHistory = "GIVEN";
    this.kudosService.getUserGivenHistory(id, this.currentPage - 1, 10)
      .subscribe(transactions => this.extractTransactions(transactions));
  }

  getReceivedHistory(id: string){
    this.selectedHistory = "RECEIVED";
    this.kudosService.getUserReceivedHistory(id, this.currentPage - 1, 10)
      .subscribe(transactions => this.extractTransactions(transactions));
  }

  loadPage(pageNumber: number){
    this.currentPage = pageNumber;
    this.loadSelectedHistory();
  }

  nextPage(){
    this.buttonsDisabled = true;
    this.currentPage = this.currentPage + 1;
    this.loadSelectedHistory();
  }

  previousPage(){
    this.buttonsDisabled = true;
    this.currentPage = this.currentPage - 1;
    this.loadSelectedHistory();
  }

  loadSelectedHistory(){
    if (this.selectedHistory === "ALL"){
      this.getAllHistory(this._id);
    } else if(this.selectedHistory === "GIVEN"){
      this.getGivenHistory(this._id);
    } else {
      this.getReceivedHistory(this._id);
    }
  }

  extractTransactions(transactions: any){
    this.transactions = transactions.content;
    this.isFirstPage = transactions.first;
    this.isLastPage = transactions.last;
    this.totalPages = transactions.totalPages;
    this.buttonsDisabled = false;
    this.isReady = true;
  }

}
