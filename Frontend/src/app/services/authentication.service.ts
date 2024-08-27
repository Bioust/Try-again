import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor() { }

authUser(user: User) {
  let userArray = [];
  const localStorageData = localStorage.getItem('Users');
  if(localStorageData) {
    userArray = JSON.parse(localStorageData);
  }
  return userArray.find((x: { userName: string; password: string; })=> x.userName === user.userName && x.password === user.password)
}

}
