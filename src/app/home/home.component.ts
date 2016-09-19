import {Component, OnInit} from '@angular/core';
import {HomeService} from "../shared/home.service";
import {Response} from "@angular/http";
import Any = jasmine.Any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [HomeService]
})
export class HomeComponent implements OnInit {

    constructor(private homeService: HomeService) {
    }

    user:User;
    usersActions:any;

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

    setCurrentUser(resp){
        this.user = new User(resp);
    }

}

export class User {

    constructor(response: any) {
        this.birthday = response.birthday;
        this.completed = response.completed;
        this.email = response.email;
        this.firstName = response.firstName;
        this.lastName = response.lastName;
        this.id = response.id;
        this.totalKudos = response.totalKudos;
        this.weeklyKudos = response.weeklyKudos;
    }

    birthday: string;
    completed: boolean;
    email: string;
    firstName: string;
    lastName: string;
    id: string;
    totalKudos: number;
    weeklyKudos: number;
}