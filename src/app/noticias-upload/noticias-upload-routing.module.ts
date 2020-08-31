import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasUploadPage } from './noticias-upload.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasUploadPageRoutingModule {}
