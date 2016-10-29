import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "./shared/auth-guard.service";
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {HomeComponent} from "./components/home/home.component";
import {HomeReworkComponent} from "./components/home-rework/home-rework.component";
import {ChallengeComponent} from "./components/challenge/challenge.component";
import {KudosComponent} from "./components/kudos/kudos.component";
import {UserComponent} from "./components/user/user.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {PeopleComponent} from "./components/people/people.component";

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
        path: 'home-rework',
        canActivate: [AuthGuard],
        component: HomeReworkComponent
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
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
