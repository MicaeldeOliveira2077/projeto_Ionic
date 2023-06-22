import { Component } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  quantidadeProdutos: number = 0;
  constructor(private produtosService: ProdutosService) {}


  async ionViewWillEnter() {
    this.quantidadeProdutos = await this.produtosService.getQuantidadeProdutos();
  }
  
}
