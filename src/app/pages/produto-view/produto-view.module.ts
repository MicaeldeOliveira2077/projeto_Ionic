import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoViewPageRoutingModule } from './produto-view-routing.module';

import { ProdutoViewPage } from './produto-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoViewPageRoutingModule
  ],
  declarations: [ProdutoViewPage]
})
export class ProdutoViewPageModule {}
