import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  constructor(
    private userService: UserService, private router: Router
  ) { }

  users:User[] = [];

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

  editUser(_id: string) {
    this.router.navigate(['/tabs/userForm', _id],)
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event?.target?.complete();
    }, 2000);
  }

}
