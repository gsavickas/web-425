/**
 * Title: app.component.ts
 * Author: Grayton Savickas
 * Date: 30 May 2021
 * Description: App component
 */

 import { Component } from '@angular/core';

 @Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
 })
 export class AppComponent {
   isLoggedIn: Boolean = true;

   assignment: string = "Assignment 2.3 - Data Binding";
 }
