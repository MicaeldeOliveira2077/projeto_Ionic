import { Injectable } from '@angular/core';
import { Produtos } from '../model/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  add(produtos: Produtos){
    console.log("salvo");
}

}
