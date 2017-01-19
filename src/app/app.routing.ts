import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {KudosComponent} from "./components/kudos/kudos.component";
import {ChallengeComponent} from "./components/challenge/challenge.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {PeopleComponent} from "./components/people/people.component";
import {AuthGuard} from "./shared/auth-guard.service";
import {UserComponent} from "./components/user/user.component";

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
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
