import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEnterPageRoutingModule } from './user-enter-routing.module';

import { UserEnterPage } from './user-enter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEnterPageRoutingModule
  ],
  declarations: [UserEnterPage]
})
export class UserEnterPageModule {}
