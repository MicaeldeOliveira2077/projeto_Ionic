import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Produtos } from 'src/app/model/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.page.html',
  styleUrls: ['./produto-view.page.scss'],
})
export class ProdutoViewPage implements OnInit {

  _id: string | null = null;
  produtos = new Produtos();
  imageSrc: string | undefined;

  constructor(private activeRouter: ActivatedRoute, private produtosService: ProdutosService, private router: Router) { }

  ngOnInit() {
    this.getParam();
  }

  getParam() {
    this._id = this.activeRouter.snapshot.paramMap.get("id");

    if (this._id) {
      this.produtosService.get(this._id).then(async res => {
        this.produtos = <Produtos>res;
        if (this.produtos.fotos) {
          await this.produtosService.getProtoProduct(this.produtos.fotos)
            .then(res => {
              this.imageSrc = res;

            })
        } else {
          this.imageSrc = "assets/package.jpg"
        }
      })
    }

  }
  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    const imageUrl = image.webPath;
    this.imageSrc = imageUrl;
    this.produtos.fotos = this.imageSrc ? this.imageSrc : "";

    // const imageUrl = image.webPath;
    // this.imageSrc = imageUrl;
    // this.user.foto = this.imageSrc ? this.imageSrc : "";
    console.log(image)

    if (image.base64String && this._id) {
      let nameFile = Date.now().toString() + "." + image.format;
      await this.produtosService.setPhotoProduct(nameFile, image.base64String, this._id)
      await this.produtosService.getProtoProduct("product/" + nameFile)
        .then(resUrl => {
          this.produtos.fotos = resUrl
        })

    }


  }
}


