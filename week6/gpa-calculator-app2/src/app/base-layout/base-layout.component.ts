/**
 * Title: app.component.ts
 * Author: Grayton Savickas
 * Date: 4 July 2021
 * Description: App component
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {


  assignment : string;
  constructor() {
    this.assignment = "Exercise 6.4 - Input Properties";
  }

  ngOnInit(): void {
  }

}
