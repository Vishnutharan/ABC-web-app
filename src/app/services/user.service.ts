import { Injectable } from '@angular/core'; // Importing Injectable decorator to define a service in Angular
import { HttpClient } from '@angular/common/http'; // Importing HttpClient to make HTTP requests
import { Observable } from 'rxjs'; // Importing Observable to handle asynchronous operations
import { User } from '../models/user'; // Importing User model to define the shape of user data
import { LoginRequest } from '../models/LoginRequest'; // Importing LoginRequest model for login request data

@Injectable({
  providedIn: 'root' // Declares that this service should be provided in the root injector, making it available throughout the application
})
export class UserService {
  private apiUrl = 'https://localhost:7242/api/User'; // Base URL for the User API, modify this URL for production use

  constructor(private http: HttpClient) { } // Injecting HttpClient into the service to make HTTP requests

  /**
   * Registers a new user by sending a POST request to the API.
   * @param user - The user object containing registration data
   * @returns Observable<any> - The observable of the HTTP response, allowing the caller to subscribe to the result
   */
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user); // POST request to the 'register' endpoint with the user data
  }

  /**
   * Logs in a user by sending a POST request with login credentials.
   * @param loginRequest - The object containing username and password for authentication
   * @returns Observable<any> - The observable of the HTTP response, enabling subscription to the result
   */
  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, loginRequest); // POST request to the 'authenticate' endpoint with login credentials
  }
}
