/*
============================================
; Title:  my-app routing module
; Author: Grayton Savickas
; Date:   6 June 2021
; Description: Routes users to specific components based on the URL path
;===========================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

// We set two routes for home to make it simple and easy to get to the home
// even if you do not specify a route.

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
