import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../../shared/services/home.service";

@Component({
  selector: 'app-feed-panel',
  templateUrl: './feed-panel.component.html',
  styleUrls: ['./feed-panel.component.scss']
})
export class FeedPanelComponent implements OnInit {

  actions: Array<any>;
  isReady: boolean;
  isLoading: boolean;

  constructor(private homeService: HomeService) {
    this.actions = [];
    this.isReady = false;
    this.isLoading = true;
  }

  ngOnInit() {
    this.homeService.getGlobalActions(0, 30).subscribe(actions => {
      this.isReady = true;
      this.isLoading = false;
      this.actions = actions.content;
    })
  }

  getTransactions() {

  }

}
