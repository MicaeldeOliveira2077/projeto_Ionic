import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {

  ngOnInit() {
  }

  user = new User();
  constructor(private alertController: AlertController, private userService: UserService
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
    this.userService.add(this.user);
    this.presentAlert("Aviso", "Cadastrado");
    //console.log(this.user);

    
  }


}
