import { Component } from '@angular/core';
import { Produtos } from '../model/produtos';
import { AlertController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  produtos = new Produtos();
  produtosService = new ProdutosService();
  constructor(private alertController: AlertController, //private produtosService: ProdutosService
  ) {}

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });

    await alert.present();
  }

  save(){
    this.produtosService.add(this.produtos);
    this.presentAlert("Aviso", "Cadastrado");
    
    
  }


}
