import { Injectable } from '@angular/core';
import { UsersModel } from '../models/UsersModel';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  users: UsersModel[] = [];

  addUser(user: UsersModel){
    this.users.push(user);
  }

  getUsers(){
    return this.users;
  }

}