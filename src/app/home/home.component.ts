import {Component, OnInit} from '@angular/core';
import {HomeService} from "../shared/home.service";
import {Response} from "@angular/http";
import Any = jasmine.Any;
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [HomeService]
})
export class HomeComponent implements OnInit {

    constructor(private homeService: HomeService, private router: Router) {
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

    logout(){
        this.homeService.logout().subscribe(
            resp => this.router.navigate(['login'])
        )
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