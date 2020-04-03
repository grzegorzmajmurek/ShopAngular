import { Injectable } from '@angular/core';
import {User} from './shop/users/User';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  private users: User[] = [
    {id: 1, login: 'grzesiek', email: 'sd@g.com', age: 5, country: 'Poland', active: true}
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  removeUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);
    this.users.splice(userIndex, 1);
  }

  private idCount: number = 2;

  saveUser(user: User){
    if (user.id) {
      const userIndex = this.users.findIndex(p => p.id === user.id);
      this.users[userIndex] = user;
    } else {
      user.id = this.idCount;
      this.users.push(user);
      this.idCount++;
    }
  }

  getUser(id: number){
    const userIndex = this.users.findIndex(p => p.id === id);
    return{...this.users[userIndex]};
  }
}
