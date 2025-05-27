import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {User} from '../models/user/user';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideHttpClient} from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let user: User[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideHttpClient(),
        provideHttpClientTesting()],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ', () => {
    service.getUsers().subscribe(users => {
      user = users;
    })
    expect(user.length).toBeGreaterThan(0);
  })
});
