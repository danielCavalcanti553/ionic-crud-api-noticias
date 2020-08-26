import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasDetalhePage } from './noticias-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasDetalhePageRoutingModule {}
