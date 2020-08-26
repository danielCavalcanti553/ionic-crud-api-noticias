import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoffPageRoutingModule } from './logoff-routing.module';

import { LogoffPage } from './logoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoffPageRoutingModule
  ],
  declarations: [LogoffPage]
})
export class LogoffPageModule {}
