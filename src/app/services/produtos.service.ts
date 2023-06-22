
import { Injectable, inject } from '@angular/core';
import { Produtos } from '../model/produtos';
import { Firestore, addDoc, collection, doc, getDoc, getDocs, query, updateDoc } from '@angular/fire/firestore';
import { getDownloadURL, getStorage, ref, uploadString, Storage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtoId(_id: string) {
    throw new Error('Method not implemented.');
  }
  private firestore: Firestore = inject(Firestore);
  private productCollection = collection(this.firestore, 'products');
  private readonly storage: Storage = inject(Storage);

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

async setPhotoProduct(imgName: string, imgBase64: string, id: string) {
  const storageRef = ref(this.storage, "product/" + imgName);
  return await uploadString(storageRef, imgBase64, "base64")
    .then(async res => {
      const result = await updateDoc(doc(this.firestore, 'products', id), {
        fotos: res.ref.fullPath
      });
    })
}


async getProtoProduct(imgRef: string) {
  const storage = getStorage();
  return await getDownloadURL(ref(storage, imgRef))
}

async getQuantidadeProdutos(): Promise<number> {
  const produtosCollection = collection(this.firestore, 'products');
  const querySnapshot = await getDocs(produtosCollection);
  return querySnapshot.size; // Retorna o tamanho do snapshot, que representa a quantidade de produtos
}

}
