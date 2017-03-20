import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from "./authentication/sign-up/sign-up.component";
import {SignInComponent} from "./authentication/sign-in/sign-in.component";
import {HomeComponent} from "./core/home/home.component";
import {HistoryComponent} from "./core/history/history.component";
import {UserComponent} from "./core/user/user.component";
import {AdminComponent} from "./admin/admin/admin.component";
import {ShopComponent} from "./core/shop/shop.component";
import {AuthGuard} from "./shared/auth-guard.service";

const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'history',
    canActivate: [AuthGuard],
    component: HistoryComponent
  },
  {
    path: 'shop',
    canActivate: [AuthGuard],
    component: ShopComponent
  },
  {
    path: 'user/:id',
    canActivate: [AuthGuard],
    component: UserComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminComponent
  }

];

export const AppRoutingProviders: any[] = [];

export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
