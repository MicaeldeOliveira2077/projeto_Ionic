import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoViewPage } from './produto-view.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoViewPageRoutingModule {}
