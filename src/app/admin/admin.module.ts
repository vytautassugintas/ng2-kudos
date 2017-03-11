import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminComponent,
    UsersComponent
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
