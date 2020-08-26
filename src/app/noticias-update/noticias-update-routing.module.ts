import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasUpdatePage } from './noticias-update.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasUpdatePageRoutingModule {}
