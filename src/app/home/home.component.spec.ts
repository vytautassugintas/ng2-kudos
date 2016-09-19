/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {HomeService} from "../shared/home.service";

describe('Component: Home', () => {
  it('should create an instance', () => {
    let component = new HomeComponent(HomeService);
    expect(component).toBeTruthy();
  });
});
