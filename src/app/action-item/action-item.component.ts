import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'app-action-item',
    templateUrl: './action-item.component.html',
    styleUrls: ['./action-item.component.scss']
})
export class ActionItemComponent implements OnInit {

    @Input() action: any;

    constructor() {
    }

    ngOnInit() {
    }

}
