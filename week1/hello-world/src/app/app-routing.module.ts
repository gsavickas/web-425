/**
 * Title: app.modules.ts
 * Author: Grayton Savickas
 * Date: 30 May 2021
 * Description: App module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
