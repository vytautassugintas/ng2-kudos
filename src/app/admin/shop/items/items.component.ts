import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../admin.service";

@Component({
  selector: 'kudos-admin-shop-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  shopItems: Array<any> = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getShopItems(0, 20).subscribe(items => {
      this.shopItems = items;
    })
  }

}
