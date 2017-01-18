import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../services/home.service";
import {Route, Router} from "@angular/router";
declare var jQuery: any;

@Component({
    selector: 'kudos-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    providers: [HomeService]
})
export class NavBarComponent implements OnInit {

    navbarItems = [];

    predicatedEmails = [];
    showPredicates: boolean;
    receiverEmail: string;

    hideNavbar: boolean;

    selectedItem: any;

    constructor(private homeService: HomeService, private router: Router) {
        router.events.subscribe((route) => this.activate(this.router.url))
    }

    ngOnInit() {
        this.hideNavbar = true;
        this.initNavbarItems();

    }

    predicateEmail() {
        if (this.receiverEmail.length < 2) {
            this.showPredicates = false;
        } else {
            this.homeService.getEmailPredicates(this.receiverEmail).subscribe(
                resp => {
                    this.predicatedEmails = resp;
                    this.showPredicates = this.predicatedEmails.length > 0;
                },
                error => this.showPredicates = false
            );
        }
    }

    activate(url) {
        switch (url) {
            case "/":
                this.hideNavbar = true;
                this.selectedItem = null;
                break;
            case "/login":
                this.hideNavbar = true;
                this.selectedItem = null;
                break;
            case "/signup":
                this.hideNavbar = true;
                this.selectedItem = null;
                break;
            case "/home":
                this.hideNavbar = false;
                this.selectedItem = this.navbarItems[0];
                break;
            case "/kudos":
                this.hideNavbar = false;
                this.selectedItem = this.navbarItems[1];
                break;
            case "/challenge":
                this.hideNavbar = false;
                this.selectedItem = this.navbarItems[2];
                break;
            case "/shop":
                this.hideNavbar = false;
                this.selectedItem = this.navbarItems[3];
                break;
            default:
                this.hideNavbar = false;
                break;
        }
    }

    selectReceiver(receiver) {
        jQuery('#exCollapsingNavbar2').collapse('hide');
        this.router.navigate(['user/' + receiver.id]);
        this.receiverEmail = receiver.firstName + ' ' + receiver.lastName;
        this.showPredicates = false;
    }

    onSelect(navItem) {
        jQuery('#exCollapsingNavbar2').collapse('hide');
        this.selectedItem = navItem;
    }

    initNavbarItems() {
        this.navbarItems = [
            {
                title: "Home",
                link: "/home",
                icon: "fa fa-home"
            },
            {
                title: "Kudos",
                link: "/kudos",
                icon: "fa fa-gift"
            },
            {
                title: "Challenges",
                link: "/challenge",
                icon: "fa fa-gamepad"
            },
            {
                title: "Shop",
                link: "/shop",
                icon: "fa fa-shopping-cart"
            }
        ]
    }

    logout() {
        jQuery('#exCollapsingNavbar2').collapse('hide');
        this.homeService.logout().subscribe(
            resp => this.router.navigate(['login']),
        )
    }

}
