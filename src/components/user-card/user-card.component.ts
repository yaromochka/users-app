import { Component } from '@angular/core';
import {NzCardComponent, NzCardMetaComponent} from 'ng-zorro-antd/card';
import {User} from '../../models/user/user';
import {NzAvatarComponent} from 'ng-zorro-antd/avatar';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-user-card',
  imports: [
    NzCardComponent,
    NzAvatarComponent,
    RouterLink,
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  test_user: User =   {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
}
