import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../shared/services/authentication.service";

@Component({
  selector: 'recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  email: string;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.email = '';
  }

  onSubmit(){
    this.authService.reset(this.email).subscribe(
        response => {
          this.email = '';
        },
        error => {

        }
    )
  }

}
