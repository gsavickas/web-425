/**
 * Author: Grayton Savickas
 * Date: 13 June 2021
 * Description: Enhanced Secure Profile App */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string){
    this.fullName = fullName
    this.genre = genre
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;



  constructor() {
    this.composers = [
      new Composer("Valborg Aulin", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Joseph Haydn", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}
