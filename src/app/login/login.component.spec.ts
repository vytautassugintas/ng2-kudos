/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {AuthenticationService} from "../shared/authentication.service";

describe('Component: Login', () => {
  it('should create an instance', () => {
    let component = new LoginComponent(AuthenticationService);
    expect(component).toBeTruthy();
  });
});
