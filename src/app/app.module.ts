import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from "./app.routing";
import { ActionItemComponent } from './shared/components/action-item/action-item.component';
import { GiveKudosComponent } from './shared/components/give-kudos/give-kudos.component';
import { LeaderboardComponent } from './shared/components/leaderboard/leaderboard.component';
import { WisdomWallComponent } from './shared/components/wisdom-wall/wisdom-wall.component';
import { GiveChallengeComponent } from './shared/components/give-challenge/give-challenge.component';
import {SimpleNotificationsModule} from "angular2-notifications";
import {AuthGuard} from "./shared/auth-guard.service";
import {AuthenticationService} from "./shared/services/authentication.service";
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { UserKudosHistoryComponent } from './shared/components/user-kudos-history/user-kudos-history.component';
import { UserChallengesHistoryComponent } from './shared/components/user-challenges-history/user-challenges-history.component';
import { CommentsHolderComponent } from './shared/components/comments-holder/comments-holder.component';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {ConfirmationComponent} from "./components/login/partials/confirmation/confirmation.component";
import {PeopleComponent} from "./components/people/people.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {KudosComponent} from "./components/kudos/kudos.component";
import {ChallengeComponent} from "./components/challenge/challenge.component";
import {RecoverPasswordComponent} from "./components/login/partials/recover-password/recover-password.component";
import {ChallengesPanelComponent} from "./components/challenge/challenges-panel/challenges-panel.component";
import {OngoingChallengesComponent} from "./components/challenge/challenges-panel/ongoing-challenges/ongoing-challenges.component";
import {NewChallengesComponent} from "./components/challenge/challenges-panel/new-challenges/new-challenges.component";
import {ChallengeItemComponent} from "./components/challenge/challenges-panel/challenge-item/challenge-item.component";
import {GlobalFeedComponent} from "./components/home/global-feed/global-feed.component";
import {UserComponent} from "./components/user/user.component";
import {HomeReworkComponent} from "./components/home-rework/home-rework.component";
import { UserHeaderComponent } from './components/home/user-header/user-header.component';
import { UserIconComponent } from './shared/components/user-icon/user-icon.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        ActionItemComponent,
        SignUpComponent,
        GiveKudosComponent,
        LeaderboardComponent,
        WisdomWallComponent,
        KudosComponent,
        ChallengeComponent,
        ProfileComponent,
        PeopleComponent,
        ConfirmationComponent,
        RecoverPasswordComponent,
        ChallengesPanelComponent,
        OngoingChallengesComponent,
        NewChallengesComponent,
        ChallengeItemComponent,
        GiveChallengeComponent,
        GlobalFeedComponent,
        UserComponent,
        NavBarComponent,
        UserKudosHistoryComponent,
        UserChallengesHistoryComponent,
        CommentsHolderComponent,
        HomeReworkComponent,
        UserHeaderComponent,
        UserIconComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule,
        SimpleNotificationsModule
    ],
    providers: [
        AuthenticationService,
        AuthGuard,
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
