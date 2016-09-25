import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-give-kudos',
  templateUrl: './give-kudos.component.html',
  styleUrls: ['./give-kudos.component.scss']
})
export class GiveKudosComponent implements OnInit {

  showGiveForm = false;
  showErrorMessage = false;
  errorMessage: string;
  email: string;
  kudosMessage: string;
  constructor() { }

  ngOnInit() {
  }

  toggleGiveForm(){
    this.showGiveForm = !this.showGiveForm;
  }

}
