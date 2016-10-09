import { Component, OnInit } from '@angular/core';
import {KudosService} from "../../shared/services/kudos.service";

@Component({
  selector: 'app-kudos',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.scss'],
  providers: [KudosService]
})
export class KudosComponent implements OnInit {

  page: number;
  pageSize: number;

  showLoader: boolean;

  kudosList: any;

  constructor(private kudosService: KudosService) { }

  ngOnInit() {
    this.page = 0;
    this.pageSize = 10;
    this.showLoader = true;
    this.getKudosHistory();
  }

  getKudosHistory(){
    this.showLoader = true;
    this.kudosService.getHistory(this.page, this.pageSize).subscribe(
        resp => {
          this.kudosList = resp.content;
          this.showLoader = false;
        }
    )
  }

}
