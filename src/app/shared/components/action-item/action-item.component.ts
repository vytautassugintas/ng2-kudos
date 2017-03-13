import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.scss']
})
export class ActionItemComponent {

  @Input() action: any;

  constructor() { }

}
