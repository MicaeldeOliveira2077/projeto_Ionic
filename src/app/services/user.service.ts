import { Injectable, inject } from '@angular/core';
import { User } from '../model/user';
import { Firestore, collection, collectionData, addDoc, getDocs, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private firestore: Firestore = inject(Firestore);
  private userCollection = collection(this.firestore, 'users');

  constructor() { }

  add(user: User) {
   return addDoc(this.userCollection, <User>{
      email: user.email,
      nome: user.nome,
      telefone: user.telefone,
      senha: user.senha
    })
  }

   list(){
   return collectionData(query(this.userCollection));

  }
}
