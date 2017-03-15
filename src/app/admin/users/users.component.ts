import {Component, OnInit} from '@angular/core';
import {AdminService} from "../admin.service";
import {NotificationService} from "../../shared/components/notification/notification.service";

@Component({
  selector: 'kudos-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private adminService: AdminService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.adminService.getUsers().subscribe(users => this.users = users);
  }

  confirmUser(user: any){
    this.adminService.confirmUser(user.emailHash).subscribe( confirmedUser => {
      user.status = "NOT_COMPLETED";
      user = confirmedUser;
      this.notificationService.success("User confirmed", "User " + user.firstName + " " + user.lastName + " confirmed successfully")
    })
  }

  getStatusTagClass(userStatus) {
    if (userStatus == "NOT_CONFIRMED") {
      return "is-danger"
    } else if (userStatus == "NOT_COMPLETED") {
      return "is-warning";
    } else if (userStatus == "COMPLETED") {
      return "is-success"
    } else {
      return ""
    }
  }

}
