import {v4 as uuid } from 'uuid';

export class Produtos {

    _id:string = uuid();
    nome: string = "";
    categoria: String ="";
    descricao: string = "";
    quant: number = 0;
    valor: number = 0;
    ativo: boolean = true;

    add(){
        console.log("SALVO!!");
    };
}


