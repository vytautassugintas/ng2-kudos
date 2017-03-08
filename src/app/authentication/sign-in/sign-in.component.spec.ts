/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SignInComponent} from './sign-in.component';
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {AuthenticationServiceSpy} from "../../../test/authentication-service-spy";
import {Router} from "@angular/router";
import {RouterLinkStubDirective} from "../../../test/router-link-stub";
import {RouterStub} from "../../../test/router-stub";

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SignInComponent, RouterLinkStubDirective]
    })
      .overrideComponent(SignInComponent, {
        set: {
          providers: [
            {provide: AuthenticationService, useClass: AuthenticationServiceSpy},
            {provide: Router, useClass: RouterStub}
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
