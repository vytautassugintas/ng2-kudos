import {Component, OnInit} from '@angular/core';
import Any = jasmine.Any;
import {Router} from "@angular/router";
import {HomeService} from "../../shared/services/home.service";
import {User} from "../../shared/models/user";
import {ChallengesService} from "../../shared/services/challenges.service";
import {AuthGuard} from "../../shared/auth-guard.service";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {NotificationsService} from "angular2-notifications";
declare var jQuery: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [HomeService, ChallengesService]
})
export class HomeComponent implements OnInit {

    constructor(private homeService: HomeService, private challengesService: ChallengesService, private notificationService: NotificationsService, private authService: AuthenticationService, private router: Router) {

    }

    user: User;
    usersActions: any;
    userLoading: boolean;

    isSubscribing: boolean = false;

    userNewPassword: string = '';
    showPasswordError: boolean = false;
    passwordError: string = '';
    showPassword: boolean = false;

    ngOnInit() {
        this.userLoading = true;
        this.homeService.home().subscribe(
            resp => {
                this.setCurrentUser(resp);
                this.userLoading = false;
                this.homeService.actions(this.user.id, 0, 5).subscribe(
                    resp => this.usersActions = resp
                )
            }
        );
    }

    setCurrentUser(resp) {
        this.user = new User(resp);
        this.isSubscribing = this.user.subscribing;
    }

    changeSubscription() {
        this.homeService.changeSubscription(this.isSubscribing).subscribe(
            resp => this.notificationService.success('Success', 'Saved', true)
        )
    }

    changePassword() {
        console.log(this.userNewPassword);
        if (this.userNewPassword.length > 4) {
            this.showPasswordError = false;
            this.authService.changePassword(this.userNewPassword).subscribe(
                resp => {
                    jQuery('#settingsModal').modal('hide');
                    this.notificationService.success('Success', 'Password changed', true);
                    this.userNewPassword = '';
                }
            )
        } else {
            this.showPasswordError = true;
            this.passwordError = 'Password too short. Enter more than 5 symbols'
        }
    }

    logout() {
        this.homeService.logout().subscribe(
            resp => this.router.navigate(['login'])
        )
    }

}