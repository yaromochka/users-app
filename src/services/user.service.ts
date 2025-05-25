import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../models/user/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(page: number = 1, limit: number = 10): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`, {
      params: {
        _page: page.toString(),
        _limit: limit.toString()
      }
    });
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
}
