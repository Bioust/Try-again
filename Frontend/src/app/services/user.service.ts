import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

addUsers(user: User) {
  let users: any[] = []; // Initialize as an empty array
  const storedUsers = localStorage.getItem('Users');

  if (storedUsers) {
    try {
      users = JSON.parse(storedUsers);
      if (!Array.isArray(users)) {
        users = [];
      }
    } catch (e) {
      users = [];
    }
  }
  users = [user, ...users];

  localStorage.setItem('Users', JSON.stringify(users));
}

}
