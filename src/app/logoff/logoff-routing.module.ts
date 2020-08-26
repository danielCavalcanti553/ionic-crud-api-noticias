import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoffPage } from './logoff.page';

const routes: Routes = [
  {
    path: '',
    component: LogoffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoffPageRoutingModule {}
