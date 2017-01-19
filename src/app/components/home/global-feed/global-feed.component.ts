import {Component, OnInit, Input} from '@angular/core';
import {HomeService} from "../../../shared/services/home.service";

@Component({
  selector: 'kudos-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {

  usersActions: any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.globalActions(0, 5).subscribe(
        resp => this.usersActions = resp
    )
  }

}
