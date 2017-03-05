import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SignInComponent} from './authentication/sign-in/sign-in.component';
import {SignUpComponent} from './authentication/sign-up/sign-up.component';
import {AppRoutingProviders, Routing} from "./app.routing";
import {RouterModule} from "@angular/router";
import {HomeComponent} from './core/home/home.component';
import {GiveComponent} from './core/home/give/give.component';
import {UserPanelComponent} from './core/home/user-panel/user-panel.component';
import {SimpleNotificationsModule} from "angular2-notifications/lib/simple-notifications.module";
import {UserComponent} from './core/user/user.component';
import {TransactionsComponent} from './core/user/transactions/transactions.component';
import {FeedPanelComponent} from './core/home/feed-panel/feed-panel.component';
import { HistoryPanelComponent } from './core/home/history-panel/history-panel.component';
import { HistoryComponent } from './core/history/history.component';
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    GiveComponent,
    UserPanelComponent,
    UserComponent,
    TransactionsComponent,
    FeedPanelComponent,
    HistoryPanelComponent,
    HistoryComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    SimpleNotificationsModule.forRoot(),
    InfiniteScrollModule,
    FormsModule,
    Routing,
    HttpModule,
    JsonpModule,
    RouterModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
