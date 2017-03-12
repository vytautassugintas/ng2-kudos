import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { ShopComponent } from './shop/shop.component';
import { OrdersComponent } from './orders/orders.component';
import { AddItemComponent } from './shop/add-item/add-item.component';
import { ItemsComponent } from './shop/items/items.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    UsersComponent,
    ShopComponent,
    OrdersComponent,
    AddItemComponent,
    ItemsComponent
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
