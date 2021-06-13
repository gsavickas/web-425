/**
 * Author: Grayton Savickas
 * Date: 13 June 2021
 * Description: enhanced composer app
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enhanced-composer-app';
  assignment: string = 'Exercise 3.2 - Passing Data to Routes, Part 1';
}
