import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.page.html',
  styleUrls: ['./user-perfil.page.scss'],
})
export class UserPerfilPage implements OnInit {

  constructor(
    private activeRouter: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  _id: string | null = null;
  user = new User();
  imageSrc: string | undefined;

  getParam() {
    this._id = this.activeRouter.snapshot.paramMap.get("id");

    if (this._id) {
      this.userService.get(this._id).then(res => {
        this.user = <User>res;
      })
    }
  }

 async takePhoto(){
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  const imageUrl = image.webPath;
  this.imageSrc = imageUrl;
  this.user.foto = this.imageSrc ? this.imageSrc : ""
 }
  
}


