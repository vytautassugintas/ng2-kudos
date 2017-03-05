import { Component, OnInit } from '@angular/core';
import {Params, Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.userId = params['id'];
      console.log(this.userId);
      //TODO: Get user profile
    });
  }

}
