import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasDetalhePageRoutingModule } from './noticias-detalhe-routing.module';

import { NoticiasDetalhePage } from './noticias-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasDetalhePageRoutingModule
  ],
  declarations: [NoticiasDetalhePage]
})
export class NoticiasDetalhePageModule {}
