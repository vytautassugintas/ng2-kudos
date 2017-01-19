import {UserComponent} from "./views/user/user.component";
import {GlobalFeedComponent} from "./views/home/global-feed/global-feed.component";
import {ChallengeItemComponent} from "./views/challenge/challenges-panel/challenge-item/challenge-item.component";
import {NewChallengesComponent} from "./views/challenge/challenges-panel/new-challenges/new-challenges.component";
import {OngoingChallengesComponent} from "./views/challenge/challenges-panel/ongoing-challenges/ongoing-challenges.component";
import {ChallengesPanelComponent} from "./views/challenge/challenges-panel/challenges-panel.component";
import {RecoverPasswordComponent} from "./views/login/partials/recover-password/recover-password.component";
import {ConfirmationComponent} from "./views/login/partials/confirmation/confirmation.component";
import {PeopleComponent} from "./views/people/people.component";
import {ProfileComponent} from "./views/profile/profile.component";
import {ChallengeComponent} from "./views/challenge/challenge.component";
import {KudosComponent} from "./views/kudos/kudos.component";
import {SignUpComponent} from "./views/sign-up/sign-up.component";
import {HomeComponent} from "./views/home/home.component";
import {LoginComponent} from "./views/login/login.component";

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from "./app.routing";
import {ActionItemComponent} from './shared/components/action-item/action-item.component';
import {GiveKudosComponent} from './shared/components/give-kudos/give-kudos.component';
import {LeaderboardComponent} from './shared/components/leaderboard/leaderboard.component';
import {WisdomWallComponent} from './shared/components/wisdom-wall/wisdom-wall.component';
import {GiveChallengeComponent} from './shared/components/give-challenge/give-challenge.component';
import {SimpleNotificationsModule} from "angular2-notifications";
import {AuthGuard} from "./shared/auth-guard.service";
import {AuthenticationService} from "./shared/services/authentication.service";
import {NavBarComponent} from './shared/components/nav-bar/nav-bar.component';
import {UserKudosHistoryComponent} from './shared/components/user-kudos-history/user-kudos-history.component';
import {UserChallengesHistoryComponent} from './shared/components/user-challenges-history/user-challenges-history.component';
import {CommentsHolderComponent} from './shared/components/comments-holder/comments-holder.component';


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
    CommentsHolderComponent
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
