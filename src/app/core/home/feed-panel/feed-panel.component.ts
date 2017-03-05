import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../../shared/services/home.service";

@Component({
  selector: 'app-feed-panel',
  templateUrl: './feed-panel.component.html',
  styleUrls: ['./feed-panel.component.scss']
})
export class FeedPanelComponent implements OnInit {

  transactions: Array<any>;
  isReady: boolean = false;

  constructor(private homeService: HomeService) {
    this.transactions = [];
    this.isReady = true;
  }

  ngOnInit() {
    this.homeService.getGlobalTransactions(0, 10).subscribe( transactions => {
      this.isReady = true;
      console.log(transactions);
      this.transactions = transactions;
    })
  }

  getTransactions(){

  }

}
