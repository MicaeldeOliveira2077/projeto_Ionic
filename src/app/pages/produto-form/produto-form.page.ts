import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Produtos } from 'src/app/model/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.page.html',
  styleUrls: ['./produto-form.page.scss'],
})
export class ProdutoFormPage implements OnInit {

  _id: string | null = null;
  produtos = new Produtos();
  constructor(private alertController: AlertController, private router: Router, private produtosService: ProdutosService, private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getParam();
  }
  getParam() {
    this._id = this.activeRouter.snapshot.paramMap.get("id");
    if (this._id) {
      this.produtosService.get(this._id).then(res => {
        this.produtos = <Produtos>res;
      })
    }
  }

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });

    await alert.present();
  }

  save() {
    try {
      this.produtosService.add(this.produtos)
        .then((res) => {
          console.log(res);
          this.presentAlert("Aviso", "Cadastrado");
          this.router.navigate(["/"]);
        })
        .catch((err) => {
          console.log(err);
          this.presentAlert("Erro", "Não cadastrado");
        })
    } catch (err) {
      this.presentAlert("Erro", "Sistema indisponível");
    }


  }

}
