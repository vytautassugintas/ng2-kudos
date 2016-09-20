import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
