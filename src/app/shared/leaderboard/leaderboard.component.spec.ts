/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { LeaderboardComponent } from './leaderboard.component';
import {LeaderboardService} from "../leaderboard.service";

describe('Component: Leaderboard', () => {
  it('should create an instance', () => {
    let component = new LeaderboardComponent(LeaderboardService);
    expect(component).toBeTruthy();
  });
});
