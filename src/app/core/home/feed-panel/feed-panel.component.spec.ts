/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeedPanelComponent } from './feed-panel.component';
import {RouterLinkStubDirective} from "../../../../test/router-link-stub";
import {HomeService} from "../../../shared/services/home.service";
import {HomeServiceSpy} from "../../../../test/home-service-spy";

describe('FeedPanelComponent', () => {
  let component: FeedPanelComponent;
  let fixture: ComponentFixture<FeedPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedPanelComponent, RouterLinkStubDirective]
    })
      .overrideComponent(FeedPanelComponent, {
        set: {
          providers: [
            {provide: HomeService, useClass: HomeServiceSpy}
          ]
        }
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
