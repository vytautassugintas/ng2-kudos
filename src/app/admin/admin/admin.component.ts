import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";

@Component({
  selector: 'kudos-admin-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {

  selectedTab: string = "users";

  constructor() { }

  ngOnInit() {

  }

  selectTab(tabName){
    this.selectedTab = tabName;
  }

}
