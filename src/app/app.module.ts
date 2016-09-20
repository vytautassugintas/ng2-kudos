import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {routing, appRoutingProviders} from "./app.routing";
import { ActionItemComponent } from './action-item/action-item.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        ActionItemComponent,
        SignUpComponent
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
