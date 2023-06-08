import { Injectable, inject } from '@angular/core';
import { User } from '../model/user';
import { Firestore, collection, collectionData, addDoc, getDocs, query, getDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';

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

  async update(user: User, id: string) {
    const result = await updateDoc(doc(this.firestore, 'users', id),{
       email: user.email,
       nome: user.nome,
       telefone: user.telefone,
       senha: user.senha
     })

     return result;
   }


   async delete(id: string) {
    return await deleteDoc(doc(this.firestore, 'users', id));
    }

  async list() {
    //return collectionData(query(this.userCollection));
    const result = await getDocs(query(this.userCollection));
    return result.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
  }

  async get(id: string) {
    const result = await getDoc(doc(this.firestore, 'users', id))
    //return result.data() 
    return { _id: result.id, ...result.data() }
  }
}
