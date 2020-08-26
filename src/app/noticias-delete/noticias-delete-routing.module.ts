import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasDeletePage } from './noticias-delete.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasDeletePageRoutingModule {}
