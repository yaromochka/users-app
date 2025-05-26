import { Routes } from '@angular/router';
import {UsersPageComponent} from '../pages/users-page/users-page.component';
import {ProfilePageComponent} from '../pages/profile-page/profile-page.component';
import {NewPersonPageComponent} from '../pages/new-person-page/new-person-page.component';
import {StartPageComponent} from '../pages/start-page/start-page.component';

export const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'users', component: UsersPageComponent},
  {path: 'users/add', component: NewPersonPageComponent},
  {path: 'users/:id', component: ProfilePageComponent},
  {path: 'users/:id/edit', component: NewPersonPageComponent},
];
