/**
 * Author: Grayton Savickas
 * Date: 13 June 2021
 * Description: Enhanced Secure Profile App
 **/

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";
import { SignInGuard } from "src/sign-in.guard";

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  }
]
