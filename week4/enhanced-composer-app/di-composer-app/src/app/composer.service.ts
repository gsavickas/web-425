/**
 * Author: Grayton Savickas
 * Date: 17 June 2021
 * Description: Enhanced Secure Profile App */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor(){
    this.composers = [
      {
        composerId: 100,
        fullName: "Valborg Aulin",
        genre: "Classical"
      },
      {
        composerId: 101,
        fullName: "Johann Sebastian Bach",
        genre: "Classical"
      },
      {
        composerId: 102,
        fullName: "Wolfgang Amadeus Mozart",
        genre: "Classical"
      },
      {
        composerId: 103,
        fullName: "Johannes Brahms",
        genre: "Classical"
      },
      {
        composerId: 104,
        fullName: "Joseph Haydn",
        genre: "Classical"
      }
    ]
   }

   getComposers(){
     return this.composers;
   }

   getComposer(composerId: number){
      for (let composer of this.composers){
        if (composer.composerId === composerId){
          return composer;
        }
      }
      return {} as IComposer
   }
}
