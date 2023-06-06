import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/model/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.page.html',
  styleUrls: ['./produto-view.page.scss'],
})
export class ProdutoViewPage implements OnInit {

  _id: string | null = null;
  produto = new Produtos();

  constructor(private activeRouter: ActivatedRoute, private produtosService: ProdutosService, private router: Router) { }

  ngOnInit() {
    this.getParam();
  }

  getParam() {
    this._id = this.activeRouter.snapshot.paramMap.get("id");

    if (this._id) {
      this.produtosService.get(this._id).then(res => {
        this.produto = <Produtos>res;
        console.log(res);
      })


    }

  }


}
