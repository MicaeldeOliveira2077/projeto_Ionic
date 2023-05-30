import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-enter',
  templateUrl: './user-enter.page.html',
  styleUrls: ['./user-enter.page.scss'],
})
export class UserEnterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email: string = "";
  senha: string = "";

  enter(){

  }

}
