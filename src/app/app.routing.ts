import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {HomeComponent} from "./views/home/home.component";
import {SignUpComponent} from "./views/sign-up/sign-up.component";
import {KudosComponent} from "./views/kudos/kudos.component";
import {ChallengeComponent} from "./views/challenge/challenge.component";
import {ProfileComponent} from "./views/profile/profile.component";
import {PeopleComponent} from "./views/people/people.component";

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
    },
    {
        path: 'challenge',
        component: ChallengeComponent
    },
    {
        path: 'kudos',
        component: KudosComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'people',
        component: PeopleComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
