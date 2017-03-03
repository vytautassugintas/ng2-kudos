import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-give',
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.scss']
})
export class GiveComponent implements OnInit {

  isReady: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isReady = true;
  }

  onSubmit() {
    
  }

}
