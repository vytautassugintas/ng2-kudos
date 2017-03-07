/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LeadersPanelComponent} from './leaders-panel.component';
import {LeadersService} from "../../../shared/services/leaders.service";
import {Observable} from "rxjs";
import {RouterLinkStubDirective} from "../../../../test/router-link-stub";

describe('LeadersPanelComponent', () => {
  let component: LeadersPanelComponent;
  let fixture: ComponentFixture<LeadersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeadersPanelComponent, RouterLinkStubDirective]
    })
      .overrideComponent(LeadersPanelComponent, {
        set: {
          providers: [
            {provide: LeadersService, useClass: LeadersServiceSpy}
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get top receivers on init', () => {
    expect(component.leaders).toEqual([{fullName: "test test", kudosAmount: 1, userId: "id123"}])
  })

  it('should get top senders on selection', () => {
    component.selectTab("SENDERS");
    expect(component.leaders).toEqual([{fullName: "sender tester", kudosAmount: 2, userId: "312id"}])
  })

  it('should get top receivers on selection', () => {
    component.selectTab("RECEIVERS");
    expect(component.leaders).toEqual([{fullName: "test test", kudosAmount: 1, userId: "id123"}])
  })
});

class LeadersServiceSpy {
  getTopReceivers(): Observable<any> {
    return Observable.of([{fullName: "test test", kudosAmount: 1, userId: "id123"}]);
  }

  getTopSenders(): Observable<any> {
    return Observable.of([{fullName: "sender tester", kudosAmount: 2, userId: "312id"}]);
  }
}
