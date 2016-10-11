import { Component, OnInit } from '@angular/core';
import {KudosService} from "../../shared/services/kudos.service";
import {HomeService} from "../../shared/services/home.service";

@Component({
  selector: 'app-kudos',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.scss'],
  providers: [HomeService]
})
export class KudosComponent implements OnInit {

  id: string;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getKudosHistory();
  }

  getKudosHistory(){
    this.homeService.home().subscribe(
        user => this.id = user.id
    )
  }

}
