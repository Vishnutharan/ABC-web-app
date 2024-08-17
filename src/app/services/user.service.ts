import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginRequest} from '../models/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7242/api/User';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, loginRequest);
  }
}
