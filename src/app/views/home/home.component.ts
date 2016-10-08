import {Component, OnInit} from '@angular/core';
import Any = jasmine.Any;
import {Router} from "@angular/router";
import {HomeService} from "../../shared/services/home.service";
import {User} from "../../shared/models/user";
import {ChallengesService} from "../../shared/services/challenges.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [HomeService, ChallengesService]
})
export class HomeComponent implements OnInit {

    constructor(private homeService: HomeService, private challengesService: ChallengesService, private router: Router) {

    }

    user: User;
    usersActions: any;

    ngOnInit() {
        this.homeService.home().subscribe(
            resp => {
                this.setCurrentUser(resp);
                this.homeService.actions(this.user.id, 0, 5).subscribe(
                    resp => this.usersActions = resp
                )
            }
        );
    }

    setCurrentUser(resp) {
        this.user = new User(resp);
    }

    logout() {
        this.homeService.logout().subscribe(
            resp => this.router.navigate(['login'])
        )
    }

}