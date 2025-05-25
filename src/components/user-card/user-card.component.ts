import {Component, Input} from '@angular/core';
import {NzCardComponent} from 'ng-zorro-antd/card';
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
  @Input() user!: User;
}
