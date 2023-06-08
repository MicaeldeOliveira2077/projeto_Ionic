import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  constructor(
    private userService: UserService, private router: Router, private alertController: AlertController
  ) { }

  users: User[] = [];

  ngOnInit() {
    this.getList();
  }

  getList() {
    // this.userService.list().subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.users = <User[]>res;
    //   })
    this.userService.list().then(res => {
      console.log(res)
      this.users = <User[]>res;
    })
  }

  edit(_id: string) {
    this.router.navigate(['/tabs/userForm', _id],)
  }

  handleRefresh(event: any) {
    this.userService.list()
    .then(res => {
      console.log(res)
      this.users = <User[]>res;
      event?.target?.complete();
    });
  }

  async remove(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirme',
      subHeader: 'Deseja apagar o registro?',
      buttons: [{
        text: 'Não',
        role: 'cancel',
        handler: () => {
          
        },
      }, {
        text: 'Sim',
        role: 'confirm',
        handler: () => {
          this.userService.delete(id);
        },
      }],
    });

    await alert.present();
  }
}

