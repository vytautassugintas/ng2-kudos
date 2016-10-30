import {Component, OnInit} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {HomeService} from "../../shared/services/home.service";
import {ChallengesService} from "../../shared/services/challenges.service";
import {KudosService} from "../../shared/services/kudos.service";
import {User} from "../../shared/models/user";

@Component({
    selector: 'kudos-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    providers: [HomeService, ChallengesService, KudosService]
})
export class UserComponent implements OnInit {

    user: User;
    userId: any;

    showLoader: boolean;
    page: number;
    pageSize: number;

    constructor(private homeService: HomeService, private challengesService: ChallengesService, private kudosService: KudosService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.showLoader = true;
        this.page = 0;
        this.pageSize = 10;

        this.route.params.forEach((params: Params) => {
            this.userId = params['id'];
            this.getUserProfile(this.userId);
        });

    }

    getUserProfile(userId) {
        this.showLoader = true;
        this.homeService.userProfile(userId).subscribe(
            user => {
                this.user = new User(user);
                this.showLoader = false;
            }
        )
    }



}
