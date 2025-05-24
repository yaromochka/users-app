import {Component, OnInit} from '@angular/core';
import {UserCardComponent} from '../../components/user-card/user-card.component';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user/user';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-users-page',
  imports: [
    UserCardComponent,
    NgForOf
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit {
  users: User[] = []
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
