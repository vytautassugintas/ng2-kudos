/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoryComponent } from './history.component';
import {HistoryPanelComponent} from "../home/history-panel/history-panel.component";
import {RouterLinkStubDirective} from "../../../test/router-link-stub";
import {UserService} from "../../shared/services/user.service";
import {UserServiceSpy} from "../../../test/user-service-stub";
import {KudosService} from "../../shared/services/kudos.service";
import {KudosServiceSpy} from "../../../test/kudos-service-spy";

describe('HistoryComponent', () => {
  let component: HistoryPanelComponent;
  let fixture: ComponentFixture<HistoryPanelComponent>;
  let panelEl: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPanelComponent, HistoryComponent, RouterLinkStubDirective]
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
