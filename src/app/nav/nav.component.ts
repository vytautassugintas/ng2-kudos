import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../shared/services/authentication.service";
import {HomeService} from "../shared/services/home.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [HomeService]
})
export class NavComponent implements OnInit {

  isHidden: boolean;
  items: any;
  selectedItem: any;
  showDropDown: boolean;

  constructor(private router: Router, private homeService: HomeService) {
    router.events.subscribe((route) => this.activate(this.router.url));
    this.showDropDown = false;
  }

  ngOnInit() {
    this.initNavbarItems();
    this.isHidden = true;
  }

  activate(url) {
    switch (url) {
      case "/":
        this.isHidden = true;
        this.selectedItem = null;
        break;
      case "/sign-in":
        this.isHidden = true;
        this.selectedItem = null;
        break;
      case "/sign-up":
        this.isHidden = true;
        this.selectedItem = null;
        break;
      case "/home":
        this.isHidden = false;
        this.selectedItem = this.items[0];
        break;
      case "/history":
        this.isHidden = false;
        this.selectedItem = this.items[1];
        break;
      case "/admin":
        this.isHidden = false;
        this.selectedItem = this.items[2];
        break;
      default:
        this.isHidden = false;
        this.selectedItem = null;
        break;
    }
  }

  initNavbarItems() {
    this.items = [
      {
        title: "Home",
        link: "/home"
      },
      {
        title: "History",
        link: "/history"
      },
      {
        title: "Admin",
        link: "/admin"
      }
    ]
  }

  toggleDropDown(){
    this.showDropDown == true ? this.showDropDown = false : this.showDropDown = true;
  }

  receiverEmail: string;
  showPredicates: boolean = false;
  predicatedEmails: Array<any> =  [1, 2, 3];

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

  selectUser(){
    this.receiverEmail = "";
    this.showPredicates = false;
    this.predicatedEmails = [];
  }

  logout(){
    this.homeService.logout().subscribe( success => {
      this.router.navigate(['sign-in']);
    })
  }

}
