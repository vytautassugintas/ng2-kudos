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
import {UserComponent} from './core/user/user.component';
import {TransactionsComponent} from './core/user/transactions/transactions.component';
import {FeedPanelComponent} from './core/home/feed-panel/feed-panel.component';
import { HistoryPanelComponent } from './core/home/history-panel/history-panel.component';
import { HistoryComponent } from './core/history/history.component';
import { NavComponent } from './nav/nav.component';
import { LeadersPanelComponent } from './core/home/leaders-panel/leaders-panel.component';
import {AdminModule} from "./admin/admin.module";
import { NotificationComponent } from './shared/components/notification/notification.component';
import { TransactionItemComponent } from './shared/components/transaction-item/transaction-item.component';
import { ActionItemComponent } from './shared/components/action-item/action-item.component';

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
    NavComponent,
    LeadersPanelComponent,
    NotificationComponent,
    TransactionItemComponent,
    ActionItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    HttpModule,
    JsonpModule,
    RouterModule,
    AdminModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
