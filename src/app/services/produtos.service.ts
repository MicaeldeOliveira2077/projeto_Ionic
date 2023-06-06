
import { Injectable, inject } from '@angular/core';
import { Produtos } from '../model/produtos';
import { Firestore, addDoc, collection, doc, getDoc, getDocs, query } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtoId(_id: string) {
    throw new Error('Method not implemented.');
  }
  private firestore: Firestore = inject(Firestore);
  private productCollection = collection(this.firestore, 'products');
  
    
    add(produtos: Produtos){
      return addDoc(this.productCollection, <Produtos>{
        categoria: produtos.categoria,
        nome: produtos.nome,
        descricao: produtos.descricao,
        quant: produtos.quant,
        valor: produtos.valor,
        fotos: produtos.fotos,
        
      })
}

async list() {
  //return collectionData(query(this.userCollection));
  const result = await getDocs(query(this.productCollection));
  return result.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
}

async get(id: string) {
  const result = await getDoc(doc(this.firestore, 'products', id))
  //return result.data() 
  return { _id: result.id, ...result.data() }
}

}
