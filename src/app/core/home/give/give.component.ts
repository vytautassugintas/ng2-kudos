import { Component, OnInit } from '@angular/core';
import {GiveKudosFormModel} from "../../../shared/models/GiveKudosFormModel";
import {KudosService} from "../../../shared/services/kudos.service";

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

  constructor(private kudosService: KudosService) {
    this.formModel = new GiveKudosFormModel();
  }

  ngOnInit() {
    this.isExpanded = true;
    this.isReady = true;
  }
  onSubmit() {
    this.kudosService.give(this.formModel).subscribe( response =>{
      this.clearForm();
    })
  }

  onExpandToggle(){
    this.isExpanded === false ? this.isExpanded = true : this.isExpanded = false;
  }

  clearForm(){
    this.formModel = new GiveKudosFormModel();
  }

}
