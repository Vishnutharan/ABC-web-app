import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginRequest } from '../models/LoginRequest'; // Ensure this path is correct
import { User } from '../models/user';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Injectable({                                         // This will tell the componat this service injectable 
  providedIn: 'root'
})
export class UserService {
  private apiUrl = ' https://localhost:7293/api/v1/auth/'; // API base URL with trailing slash
 
  constructor(private http: HttpClient) { } // Dependency injection for HttpClient

  // Login method, takes a LoginRequest object and returns an Observable
  login(loginRequest: LoginRequest): Observable<any> {
    // Posts login request to API and handles response as an Observable
    return this.http.post(`${this.apiUrl}login`, loginRequest).pipe(
      catchError(this.handleError) // Pipes any errors to the handleError method
    );
  }

  // Register method, takes a User object and returns an Observable
  register(user: User): Observable<any> {
    // Posts registration request to API and handles response as an Observable
    return this.http.post<any>(`${this.apiUrl}register`, user).pipe(
      catchError(this.handleError) // Pipes any errors to the handleError method
    );
  }

  // Private method to handle errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // Throws an error with the modified message
    return throwError(() => new Error(errorMessage));
  }
}
