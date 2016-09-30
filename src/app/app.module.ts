import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import {AppComponent} from './app.component';
import {LoginComponent} from './views/login/login.component';
import {HomeComponent} from './views/home/home.component';
import {routing, appRoutingProviders} from "./app.routing";
import { ActionItemComponent } from './shared/components/action-item/action-item.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { GiveKudosComponent } from './shared/components/give-kudos/give-kudos.component';
import { LeaderboardComponent } from './shared/components/leaderboard/leaderboard.component';
import { WisdomWallComponent } from './shared/components/wisdom-wall/wisdom-wall.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        ActionItemComponent,
        SignUpComponent,
        GiveKudosComponent,
        LeaderboardComponent,
        WisdomWallComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
