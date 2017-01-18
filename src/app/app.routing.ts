import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {HomeComponent} from "./views/home/home.component";
import {SignUpComponent} from "./views/sign-up/sign-up.component";
import {KudosComponent} from "./views/kudos/kudos.component";
import {ChallengeComponent} from "./views/challenge/challenge.component";
import {ProfileComponent} from "./views/profile/profile.component";
import {PeopleComponent} from "./views/people/people.component";
import {AuthGuard} from "./shared/auth-guard.service";
import {UserComponent} from "./views/user/user.component";
import {ShopComponent} from "./views/shop/shop.component";

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
        canActivate: [AuthGuard],
        component: HomeComponent
    },
    {
        path: 'challenge',
        canActivate: [AuthGuard],
        component: ChallengeComponent
    },
    {
        path: 'kudos',
        canActivate: [AuthGuard],
        component: KudosComponent
    },
    {
        path: 'user/:id',
        canActivate: [AuthGuard],
        component: UserComponent
    },
    {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent
    },
    {
        path: 'people',
        canActivate: [AuthGuard],
        component: PeopleComponent
    },
    {
        path: 'shop',
        canActivate: [AuthGuard],
        component: ShopComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
