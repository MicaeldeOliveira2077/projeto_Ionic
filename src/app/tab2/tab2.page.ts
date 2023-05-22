import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  user = new User();

}
