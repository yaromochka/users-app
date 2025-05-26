import {Component, OnInit} from '@angular/core';
import {UserCardComponent} from '../../components/user-card/user-card.component';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user/user';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {BackButtonComponent} from '../../components/back-button/back-button.component';

@Component({
  selector: 'app-users-page',
  imports: [
    UserCardComponent,
    NgForOf,
    FormsModule,
    RouterLink,
    BackButtonComponent
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit {
  users: User[] = []
  sortField: string = 'name'; // по умолчанию сортировка по имени
  currentPage: number = 1;
  limit: number = 6;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.currentPage, this.limit).subscribe(users => {
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

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  goToNextPage() {
    this.currentPage++;
    this.loadUsers();
  }
}
