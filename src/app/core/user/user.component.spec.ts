/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {UserComponent} from './user.component';
import {HistoryPanelComponent} from "../home/history-panel/history-panel.component";
import {RouterLinkStubDirective} from "../../../test/router-link-stub";
import {ActivatedRouteStub} from "../../../test/activated-route-stubs";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../shared/services/user.service";
import {UserServiceSpy} from "../../../test/user-service-stub";
import {KudosService} from "../../shared/services/kudos.service";
import {KudosServiceSpy} from "../../../test/kudos-service-spy";
import {Observable} from "rxjs";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent, HistoryPanelComponent, RouterLinkStubDirective],
      providers: [
        {provide: ActivatedRoute, useValue: {'params': Observable.from([{'id': 1}])}},
        {provide: UserService, useValue: UserServiceSpy}
      ]
    })
      .overrideComponent(HistoryPanelComponent, {
        set: {
          providers: [
            {provide: UserService, useClass: UserServiceSpy},
            {provide: KudosService, useClass: KudosServiceSpy},
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
