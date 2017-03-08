/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {HistoryPanelComponent} from './history-panel.component';
import {RouterLinkStubDirective} from "../../../../test/router-link-stub";
import {KudosServiceSpy} from "../../../../test/kudos-service-spy";
import {KudosService} from "../../../shared/services/kudos.service";
import {UserServiceSpy} from "../../../../test/user-service-stub";
import {UserService} from "../../../shared/services/user.service";

describe('HistoryPanelComponent', () => {
  let component: HistoryPanelComponent;
  let fixture: ComponentFixture<HistoryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryPanelComponent, RouterLinkStubDirective]
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
    fixture = TestBed.createComponent(HistoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
