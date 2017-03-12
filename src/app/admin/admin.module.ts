import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { ShopComponent } from './shop/shop.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminComponent,
    UsersComponent,
    ShopComponent,
    OrdersComponent
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
