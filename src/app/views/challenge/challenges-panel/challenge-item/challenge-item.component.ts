import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Challenge} from "../../../../shared/models/challenge";
import {ChallengesService} from "../../../../shared/services/challenges.service";

@Component({
  selector: 'kudos-challenge-item',
  templateUrl: './challenge-item.component.html',
  styleUrls: ['./challenge-item.component.scss'],
  providers: [ChallengesService]
})
export class ChallengeItemComponent implements OnInit {

  @Input() challenge: any;
  @Input() index: any;

  @Output() removeRequest = new EventEmitter();

  constructor(private challengesService: ChallengesService) {

  }

  ngOnInit() {
    this.challenge = new Challenge(this.challenge);
    this.challenge.actions.acceptAllowed = true;
  }

  accept(){
    console.log("In ITEM")
    console.log(this.challenge);
    this.removeRequest.emit(this.index);
  }

  decline(){

  }

  cancel(){

  }

}
