/**
 * Title: app.component.ts
 * Author: Grayton Savickas
 * Date: 27 June 2021
 * Description: App component
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
