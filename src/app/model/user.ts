import {v4 as uuid } from 'uuid';
export class User {
    _id:string = uuid();
    nome: string = "";
    email: String ="";
    senha: string = "";
    telefone: string = "";
    ativo:boolean = true;


    add(){
        console.log("SALVO!!")
    }
}
