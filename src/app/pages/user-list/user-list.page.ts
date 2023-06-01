import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  users:User[] = [];

  ngOnInit() {
    this.userService.list().subscribe(
      res =>{
          //this.users = res;
    })
  }

  

}
