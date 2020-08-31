import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasUploadPageRoutingModule } from './noticias-upload-routing.module';

import { NoticiasUploadPage } from './noticias-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasUploadPageRoutingModule
  ],
  declarations: [NoticiasUploadPage]
})
export class NoticiasUploadPageModule {}
