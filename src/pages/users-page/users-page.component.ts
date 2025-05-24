import { Component } from '@angular/core';
import {UserCardComponent} from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-users-page',
  imports: [
    UserCardComponent
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {

}
