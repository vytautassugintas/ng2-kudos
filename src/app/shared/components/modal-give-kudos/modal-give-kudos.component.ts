import {Component, OnInit} from '@angular/core';
import {KudosService} from "../../services/kudos.service";
import {ModalGiveKudosService} from "./modal-give-kudos.service";
import {Component, OnInit} from '@angular/core';
import {GiveKudosFormModel} from "../../../shared/models/GiveKudosFormModel";
import {KudosService} from "../../../shared/services/kudos.service";
import {UserService} from "../../../shared/services/user.service";
import {NotificationService} from "../../../shared/components/notification/notification.service";
import {ENDORSEMENT} from "../../../shared/endorsements.constant";

@Component({
  selector: 'app-modal-give-kudos',
  templateUrl: './modal-give-kudos.component.html',
  styleUrls: ['./modal-give-kudos.component.scss']
})
export class ModalGiveKudosComponent implements OnInit {

  isReady: boolean;
  isExpanded: boolean;
  isModalOpened: boolean;
  hasErrors: boolean;
  errorMessage: string;
  formModel: GiveKudosFormModel;
  endorsements: Array<any>;
  endorsementSearchValue: string = "";
  selectedEndorsement: string = "";

  constructor(private kudosService: KudosService, private userService: UserService, private notificationService: NotificationService, private modalService: ModalGiveKudosService) {

  }

  ngOnInit() {
    this.isReady = true;
    this.isExpanded = true;
    this.isModalOpened = false;
    this.hasErrors = false;
    this.errorMessage = null;
    this.formModel = new GiveKudosFormModel();
    this.endorsements = ENDORSEMENT.LIST;
  }

  onSubmit() {
    if (!this.formModel.isValid()) {
      this.hasErrors = true;
      this.errorMessage = "One of the fields is empty";
    } else {
      this.clearErrors();
      this.kudosService.give(this.formModel).subscribe(response => {
        this.notificationService.success("Success", response.amount + " kudos sent to " + response.receiverFullName);
        this.userService.currentUser.weeklyKudos -= this.formModel.amount;
        this.userService.currentUser.experiencePoints += this.formModel.amount * 2;
        this.userService.updateUser(this.userService.currentUser);
        this.clearForm();
      }, error => {
        console.log(error);
        if (error.fieldError) {
          this.hasErrors = true;
          this.errorMessage = error.fieldError.message;
        }
      })
    }
  }

  onClearClick() {
    this.clearForm();
    this.clearErrors();
  }

  onExpandToggle() {
    this.isExpanded === false ? this.isExpanded = true : this.isExpanded = false;
  }

  toggleModal() {
    this.isModalOpened === false ? this.isModalOpened = true : this.isModalOpened = false;
  }

  clearForm() {
    this.formModel = new GiveKudosFormModel();
  }

  clearErrors() {
    this.hasErrors = false;
    this.errorMessage = "";
  }

  searchItems(ev) {
    this.initializeItems();
    let val = ev;

    if (val && val.trim() != '') {
      let arrayToCheck: Array<string> = [];
      for (let i in this.endorsements){
        for(let item of this.endorsements[i].endorsements){
          arrayToCheck.push(item.endorsement);
        }
      }

      this.endorsements = arrayToCheck.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  selectEndorsement(endorsement){
    this.formModel.endorsement = endorsement;
    this.toggleModal();
  }

  clearEndorsement(){
    this.formModel.endorsement = "";
  }

  initializeItems() {
    this.endorsements = ENDORSEMENT.LIST;
  }

  openModal() {
    this.isModalOpened = true;
  }

  closeModal() {

  }

}
