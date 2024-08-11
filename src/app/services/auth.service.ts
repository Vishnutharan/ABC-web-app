// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:5000/api/auth';

//   constructor(private http: HttpClient) { }

//   login(credentials: { username: string, password: string }): Observable<any> {
//     return this.http.post(`${this.apiUrl}/login`, credentials);
//   }

//   register(user: { username: string, password: string, email: string }): Observable<any> {
//     return this.http.post(`${this.apiUrl}/register`, user);
//   }

//   logout(): void {
//     // Implement logout functionality if needed
//   }

//   isAuthenticated(): boolean {
//     // Implement logic to check if the user is authenticated
//     return !!localStorage.getItem('token');
//   }
// }
