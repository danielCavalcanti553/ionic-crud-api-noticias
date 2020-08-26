import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasNewPageRoutingModule } from './noticias-new-routing.module';

import { NoticiasNewPage } from './noticias-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasNewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NoticiasNewPage]
})
export class NoticiasNewPageModule {}
