import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from "./authentication/sign-up/sign-up.component";
import {SignInComponent} from "./authentication/sign-in/sign-in.component";
import {HomeComponent} from "./core/home/home.component";

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
    component: HomeComponent
  }

];

export const AppRoutingProviders: any[] = [];

export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
