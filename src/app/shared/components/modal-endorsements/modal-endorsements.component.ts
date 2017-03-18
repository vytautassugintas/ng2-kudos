import {Component, OnInit} from '@angular/core';
import {ModalEndorsementsService} from "./modal-endorsements.service";

@Component({
  selector: 'app-modal-endorsements',
  templateUrl: './modal-endorsements.component.html',
  styleUrls: ['./modal-endorsements.component.scss']
})
export class ModalEndorsementsComponent implements OnInit {

  constructor(private modalService: ModalEndorsementsService) {
  }

  ngOnInit() {

  }

  selectEndorsement() {

  }

  openModal() {

  }

  closeModal() {

  }
}
