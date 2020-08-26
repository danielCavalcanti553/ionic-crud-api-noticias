import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasDeletePageRoutingModule } from './noticias-delete-routing.module';

import { NoticiasDeletePage } from './noticias-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasDeletePageRoutingModule
  ],
  declarations: [NoticiasDeletePage]
})
export class NoticiasDeletePageModule {}
