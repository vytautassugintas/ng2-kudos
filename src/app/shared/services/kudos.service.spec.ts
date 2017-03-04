/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KudosService } from './kudos.service';

describe('KudosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KudosService]
    });
  });

  it('should ...', inject([KudosService], (service: KudosService) => {
    expect(service).toBeTruthy();
  }));
});
