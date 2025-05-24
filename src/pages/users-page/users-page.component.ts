import {Component, OnInit} from '@angular/core';
import {UserCardComponent} from '../../components/user-card/user-card.component';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user/user';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-users-page',
  imports: [
    UserCardComponent,
    NgForOf,
    FormsModule
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit {
  users: User[] = []
  sortField: string = 'name'; // по умолчанию сортировка по имени

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.sortUsers();
    });
  }

  sortUsers() {
    this.users.sort((a, b) => {
      const fieldA = (a as any)[this.sortField]?.toString().toLowerCase() || '';
      const fieldB = (b as any)[this.sortField]?.toString().toLowerCase() || '';
      return fieldA.localeCompare(fieldB);
    });
  }
}
