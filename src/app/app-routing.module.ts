import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'noticias-list',
    pathMatch: 'full'
  },
  {
    path: 'noticias-list',
    loadChildren: () => import('./noticias-list/noticias-list.module').then( m => m.NoticiasListPageModule)
  },
  { path: 'noticias-list2', loadChildren: './noticias-list/noticias-list.module#NoticiasListPageModule',canActivate: [AuthGuardService]  },
  {
    path: 'noticias-detalhe/:id',
    loadChildren: () => import('./noticias-detalhe/noticias-detalhe.module').then( m => m.NoticiasDetalhePageModule) 
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logoff',
    loadChildren: () => import('./logoff/logoff.module').then( m => m.LogoffPageModule)
  },
  {
    path: 'noticias-new',
    loadChildren: () => import('./noticias-new/noticias-new.module').then( m => m.NoticiasNewPageModule)
  },
  {
    path: 'noticias-update/:id',
    loadChildren: () => import('./noticias-update/noticias-update.module').then( m => m.NoticiasUpdatePageModule)
  },
  {
    path: 'noticias-delete/:id',
    loadChildren: () => import('./noticias-delete/noticias-delete.module').then( m => m.NoticiasDeletePageModule)
  },
  {
    path: 'noticias-upload/:id',
    loadChildren: () => import('./noticias-upload/noticias-upload.module').then( m => m.NoticiasUploadPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
