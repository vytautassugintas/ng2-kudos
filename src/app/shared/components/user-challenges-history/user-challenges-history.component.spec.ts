/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { UserChallengesHistoryComponent } from './user-challenges-history.component';
import {ChallengesService} from "../../services/challenges.service";

describe('Component: UserChallengesHistory', () => {
  it('should create an instance', () => {
    let component = new UserChallengesHistoryComponent(ChallengesService);
    expect(component).toBeTruthy();
  });
});
