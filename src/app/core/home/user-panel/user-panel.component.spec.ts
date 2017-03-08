/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserPanelComponent } from './user-panel.component';
import {UserService} from "../../../shared/services/user.service";
import {UserServiceSpy} from "../../../../test/user-service-stub";

describe('UserPanelComponent', () => {
  let component: UserPanelComponent;
  let fixture: ComponentFixture<UserPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelComponent ]
    })
      .overrideComponent(UserPanelComponent, {
        set: {
          providers: [
            {provide: UserService, useClass: UserServiceSpy}
          ]
        }
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
