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

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    GiveComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    SimpleNotificationsModule.forRoot(),
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
