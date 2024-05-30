import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Models/users.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = '';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Users[]>(this.baseUrl);
  }

  postUsers(users: Users) {
    return this.http.post<Users>(this.baseUrl, users);
  }

  deleteUsers(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
