import { Component, OnInit } from '@angular/core';
import {GiveKudosFormModel} from "../../../shared/models/GiveKudosFormModel";
import {KudosService} from "../../../shared/services/kudos.service";
import {NotificationsService} from "angular2-notifications/lib/notifications.service";

@Component({
  selector: 'app-give',
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.scss'],
  providers: [KudosService]
})
export class GiveComponent implements OnInit {

  isReady: boolean = false;
  isExpanded: boolean = false;
  formModel: GiveKudosFormModel;

  constructor(private kudosService: KudosService, private notificationService: NotificationsService) {
    this.formModel = new GiveKudosFormModel();
  }

  ngOnInit() {
    this.isExpanded = false;
    this.isReady = true;
  }

  onSubmit() {
    this.kudosService.give(this.formModel).subscribe( response =>{
      this.notificationService.success("Success", response.amount + " kudos sent to " + response.receiverFullName);
      this.clearForm();
    })
  }

  onClearClick(){
    this.clearForm();
  }

  onExpandToggle(){
    this.isExpanded === false ? this.isExpanded = true : this.isExpanded = false;
  }

  clearForm(){
    this.formModel = new GiveKudosFormModel();
  }

}
