import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isHidden: boolean;
  items: any;
  selectedItem: any;

  constructor(private router: Router) {
    router.events.subscribe((route) => this.activate(this.router.url))
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
        title: "[TEST] Admin",
        link: "/admin"
      }
    ]
  }

}
