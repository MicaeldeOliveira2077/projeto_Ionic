import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from 'src/app/model/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
})
export class ProdutoListPage implements OnInit {

  produtos:Produtos[] = [];
  produtosServices: any;

  constructor(private router: Router, private produtoService: ProdutosService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    // this.userService.list().subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.users = <User[]>res;
    //   })
    this.produtoService.list().then(res => {
      console.log(res)
      this.produtos = <Produtos[]>res;
    })
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event?.target?.complete();
    }, 2000);
  }

  viewProduct(_id: string) {
    this.router.navigate(['/tabs/produtoView', _id],)
  }

  limitarDescricao(descricao: string): string {
    if (descricao.length > 30) {
      return descricao.substring(0, 50) + '...';
    }
    return descricao;
  }
}
