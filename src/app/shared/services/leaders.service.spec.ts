/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeadersService } from './leaders.service';

describe('LeadersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadersService]
    });
  });

  it('should ...', inject([LeadersService], (service: LeadersService) => {
    expect(service).toBeTruthy();
  }));
});
