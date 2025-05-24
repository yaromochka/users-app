import { Routes } from '@angular/router';
import {UsersPageComponent} from '../pages/users-page/users-page.component';
import {ProfilePageComponent} from '../pages/profile-page/profile-page.component';

export const routes: Routes = [
  {path: 'users', component: UsersPageComponent},
  {path: 'users/:id', component: ProfilePageComponent},
];
