import { Component, OnInit } from '@angular/core';
import {ShopItemFormModel} from "../../../shared/models/ShopItemFormModel";
import {AdminService} from "../../admin.service";
import {NotificationService} from "../../../shared/components/notification/notification.service";

@Component({
  selector: 'kudos-admin-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  formModel: ShopItemFormModel;

  constructor(private adminService: AdminService, private notificationService: NotificationService) {
    this.formModel = new ShopItemFormModel();
  }

  ngOnInit() {
  }

  onSubmit(){
    this.adminService.addShopItem(this.formModel).subscribe( ok => {
      this.notificationService.success("Success", "Shop item added");
      this.formModel = new ShopItemFormModel();
    });
  }

}
