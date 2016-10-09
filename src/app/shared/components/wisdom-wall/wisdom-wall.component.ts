import { Component, OnInit } from '@angular/core';
import {WisdomWallService} from "../../services/wisdom-wall.service";
declare var jQuery:any;

@Component({
  selector: 'app-wisdom-wall',
  templateUrl: './wisdom-wall.component.html',
  styleUrls: ['./wisdom-wall.component.scss'],
  providers: [WisdomWallService]
})
export class WisdomWallComponent implements OnInit {

  showLoader: boolean;

  randomIdea: any;

  phrase: string;
  author: string;

  errorMessage: string;
  showError = false;

  constructor(private wisdomWallService: WisdomWallService) { }

  ngOnInit() {
    this.showLoader = true;
    this.phrase = '';
    this.author = '';
    this.getRandomIdea();
  }

  getRandomIdea(){
    this.showLoader = true;
    this.wisdomWallService.getRandomIdea().subscribe(
        randomIdea => {
          this.randomIdea = randomIdea;
          this.showLoader = false
        }
    )
  }

  onSubmit(){
    this.wisdomWallService.addNewIdea(this.author, this.phrase).subscribe(
        response => jQuery('#newIdeaModal').modal('hide')
    )
  }

}
