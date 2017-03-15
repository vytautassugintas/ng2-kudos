import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../shared/services/shop.service";
import {NotificationService} from "../../shared/components/notification/notification.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  isReady: boolean;
  shopItems: Array<any>;
  availablePoints: any;

  constructor(private shopService: ShopService, private notificationService: NotificationService) {
    this.isReady = false;
    this.shopItems = [];
  }

  ngOnInit() {
    this.getShopItems(0, 20);
    this.getAvailableKudosPoints();
  }

  getShopItems(page: number, size: number) {
    this.shopService.getShopItems(page, size).subscribe(
      items => {
        this.shopItems = items;
        this.isReady = true;
      },
      error => {
        this.shopItems = [];
        this.isReady = true;
      })
  }

  getAvailableKudosPoints() {
    this.shopService.getAvailableKudosPoints().subscribe(
      response => {
        this.availablePoints = response.points;
      },
      error => {
        //todo: do something about that
      }
    )
  }

  orderItem(item) {
    this.shopService.buyItem(item.id).subscribe(
      success => {
        this.notificationService.success("Ordered", "You successfully ordered " + item.name + " someone will deliver your item.");
      },
      error => {
        this.notificationService.success("ERROR", error.fieldError.message.toString());
      }
    )

  }

}
