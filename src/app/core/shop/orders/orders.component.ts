import { Component, OnInit } from '@angular/core';
import {ShopService} from "../../../shared/services/shop.service";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  isReady: boolean;
  orders: Array<any>;

  constructor(private shopService: ShopService, private userService: UserService) {
    this.orders = [];
    this.isReady = false;
  }

  ngOnInit() {
    if(this.userService.currentUser){
      this.getOrders(0, 10);
    } else {
      this.userService.getCurrentUser().subscribe(() => this.getOrders(0, 10))
    }
  }

  getOrders(page, size){
    this.shopService.getUserOrders(this.userService.currentUser.id, page, size).subscribe(
      orders => {
        this.orders = orders;
        this.isReady = true;
      }
    )
  }

}
