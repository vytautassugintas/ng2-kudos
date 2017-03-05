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

  @Input()
  set id(value: string) {
    this._id = value;
    this.isReady = false;
    this.getAllHistory(this._id);
  }

  constructor(private kudosService: KudosService) {
    this.isReady = false;
    this.selectedHistory = "";
    this.transactions = [];
  }

  ngOnInit() {

  }

  getAllHistory(id: string){
    this.selectedHistory = "ALL";
    this.kudosService.getUserHistory(id, 0, 10)
      .subscribe(transactions => this.extractTransactions(transactions));
  }

  getGivenHistory(id: string){
    this.selectedHistory = "GIVEN";
    this.kudosService.getUserGivenHistory(id, 0, 10)
      .subscribe(transactions => this.extractTransactions(transactions));
  }

  getReceivedHistory(id: string){
    this.selectedHistory = "RECEIVED";
    this.kudosService.getUserReceivedHistory(id, 0, 10)
      .subscribe(transactions => this.extractTransactions(transactions));
  }

  extractTransactions(transactions: any){
    this.transactions = transactions;
    this.isReady = true;
  }

}
