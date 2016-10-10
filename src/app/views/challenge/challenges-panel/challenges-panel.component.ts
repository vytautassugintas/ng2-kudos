import {Component, OnInit} from '@angular/core';
import {ChallengesService} from "../../../shared/services/challenges.service";

@Component({
    selector: 'kudos-challenges-panel',
    templateUrl: './challenges-panel.component.html',
    styleUrls: ['./challenges-panel.component.scss']
})
export class ChallengesPanelComponent implements OnInit {

    constructor(private challengesService: ChallengesService) {

    }

    ngOnInit() {
    }
    
}
