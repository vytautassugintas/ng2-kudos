import { Component, OnInit } from '@angular/core';
import {LeadersService} from "../../../shared/services/leaders.service";

@Component({
  selector: 'app-leaders-panel',
  templateUrl: './leaders-panel.component.html',
  styleUrls: ['./leaders-panel.component.scss']
})
export class LeadersPanelComponent implements OnInit {

  isReady: boolean;
  selectedTab: string;
  leaders: Array<any>;

  constructor(private leadersService: LeadersService) {
    this.selectedTab = "RECEIVERS";
    this.leaders = [];
  }

  ngOnInit() {
    this.leadersService.getTopReceivers("999").subscribe(leaders => {
      this.leaders = leaders;
      this.isReady = true;
    })
  }

  selectTab(tabName){
    this.selectedTab = tabName;
    if (tabName == "RECEIVERS"){
      this.getTopReceivers("999");
    } else {
      this.getTopSenders("999");
    }
  }

  getTopReceivers(periodInDays: string){
    this.isReady = false;
    this.leadersService.getTopReceivers(periodInDays).subscribe(leaders => {
      this.leaders = leaders;
      this.isReady = true;
    })
  }

  getTopSenders(periodInDays: string){
    this.isReady = false;
    this.leadersService.getTopSenders(periodInDays).subscribe(leaders => {
      this.leaders = leaders;
      this.isReady = true;
    })
  }

}
