import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './Models/users.model'; // Import Users model

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/user/';

  constructor(private httpClient: HttpClient) {}

  getAllUsers(myToken: string): Observable<Users[]> { // Return type is Users[]
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${myToken}`
    });
    return this.httpClient.get<Users[]>(this.apiUrl + 'getAllUsers', { headers });
  }
}
