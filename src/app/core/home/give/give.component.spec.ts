/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {GiveComponent} from './give.component';
import {RouterLinkStubDirective} from "../../../../test/router-link-stub";
import {FormsModule} from "@angular/forms";
import {KudosService} from "../../../shared/services/kudos.service";
import {KudosServiceSpy} from "../../../../test/kudos-service-spy";
import {NotificationsService} from "angular2-notifications/lib/notifications.service";
import {NotificationsServiceSpy} from "../../../../test/notification-service-spy";

describe('GiveComponent', () => {
  let component: GiveComponent;
  let fixture: ComponentFixture<GiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [GiveComponent]
    })
      .overrideComponent(GiveComponent, {
        set: {
          providers: [
            {provide: KudosService, useClass: KudosServiceSpy},
            {provide: NotificationsService, useClass: NotificationsServiceSpy},
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
