import { Injectable, inject } from '@angular/core';
import { User } from '../model/user';
import { Firestore, collection, addDoc, getDocs, query, getDoc, doc, updateDoc, deleteDoc, where, setDoc } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);
  private userCollection = collection(this.firestore, 'users');

  constructor() { }

  async add(user: User) {
    await createUserWithEmailAndPassword(this.auth, user.email, user.senha)
      .then(resAuth => {
        //delete user._id;
        return this.addUser(user, resAuth.user.uid)
          .catch(async err => {
            await this.auth.currentUser?.delete();
          });
      })
      .catch(async erroAuth => {
        await this.auth.currentUser?.delete();
      })
  }

  addUser(user: User, idDoc: string = "") {
    return setDoc(doc(this.firestore, 'users/' + idDoc), <User>{
      email: user.email,
      nome: user.nome,
      telefone: user.telefone,
      //senha: user.senha,
      ativo: user.ativo
    })
  }

  async update(user: User, id: string) {
    const result = await updateDoc(doc(this.firestore, 'users', id), {
      email: user.email,
      nome: user.nome,
      telefone: user.telefone,
      senha: user.senha,

    })

    return result;
  }


  async delete(id: string) {
    // return await deleteDoc(doc(this.firestore, 'users', id));
    const result = await updateDoc(doc(this.firestore, 'users', id), {
      ativo: false

    });

    return result;
  }

  async list() {
    //return collectionData(query(this.userCollection));
    const result = await getDocs(query(this.userCollection, where("ativo", "==", true)));
    return result.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
  }

  async get(id: string) {
    const result = await getDoc(doc(this.firestore, 'users', id))
    //return result.data() 
    return { _id: result.id, ...result.data() }
  }
}
