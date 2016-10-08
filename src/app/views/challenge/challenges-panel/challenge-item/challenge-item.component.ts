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
    this.challengesService.acceptChallenge(this.challenge.id).subscribe(
        response => {
          this.notifyUser("accepted");
          this.removeRequest.emit(this.index);
        }
    );

  }

  decline(){
    this.challengesService.declineChallenge(this.challenge.id).subscribe(
        response => {
          this.notifyUser("declined");
          this.removeRequest.emit(this.index);
        }
    );
  }

  cancel(){
    this.challengesService.cancelChallenge(this.challenge.id).subscribe(
        response => {
          this.notifyUser("canceled");
          this.removeRequest.emit(this.index);
        }
    );
  }

  complete(){
    this.challengesService.completeChallenge(this.challenge.id).subscribe(
        response => {
          this.notifyUser("completed");
          this.removeRequest.emit(this.index);
        }
    );
  }

  markAsFailed(){
    this.challengesService.markAsFailedChallenge(this.challenge.id).subscribe(
        response => {
          this.notifyUser("marked as failed");
          this.removeRequest.emit(this.index);
        }
    );
  }

  private notifyUser(action: string){
    console.log("Challenge " + action)
  }

}
