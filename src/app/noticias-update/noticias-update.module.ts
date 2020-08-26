import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasUpdatePageRoutingModule } from './noticias-update-routing.module';

import { NoticiasUpdatePage } from './noticias-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NoticiasUpdatePage]
})
export class NoticiasUpdatePageModule {}
