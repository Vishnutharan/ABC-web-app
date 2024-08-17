import { Component } from '@angular/core'; // Imports Angular's Component decorator
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Imports FormBuilder, FormGroup, and Validators for form handling
import { UserService } from 'src/app/services/user.service'; // Imports UserService for handling user-related operations
import { Router } from '@angular/router'; // Imports Router for navigation
import { LoginRequest } from 'src/app/models/LoginRequest'; // Imports LoginRequest model for the login request data

@Component({
  selector: 'app-login', // Defines the selector for the component
  templateUrl: './login.component.html', // Links the HTML template for this component
  styleUrls: ['./login.component.css'] // Links the CSS styles for this component
})
export class LoginComponent {
  loginForm: FormGroup; // Declares a FormGroup for the login form
  errorMessage: string = ''; // Initializes an empty string to hold error messages

  constructor(
    private fb: FormBuilder, // Injects FormBuilder to create form controls
    private userService: UserService, // Injects UserService to handle login operations
    private router: Router // Injects Router to handle navigation
  ) {
    this.loginForm = this.fb.group({ // Initializes the form with FormBuilder
      userTypes: ['', Validators.required], // formControlName for userType with required validation
      username: ['', Validators.required], // formControlName for username with required validation
      passwordHash: ['', Validators.required] // formControlName for passwordHash with required validation
    });
  }

  onSubmit() { // Method triggered on form submission
    if (this.loginForm.valid) { // Checks if the form is valid
      const { userTypes, username, passwordHash } = this.loginForm.value;
      const loginRequest: LoginRequest = { username, passwordHash };

      this.userService.login(loginRequest).subscribe({
        next: () => {
          switch (userTypes) {
            case 'admin':
              this.router.navigate(['/admin-dashboard']);
              break;
            case 'staff':
              this.router.navigate(['/staff-dashboard']);
              break;
            case 'customer':
              this.router.navigate(['/customer-dashboard']);
              break;
            default:
              this.errorMessage = 'Invalid user type';
          }
        },
        error: (err: any) => this.errorMessage = err.error
      });
    }
  }

  // Getters for form controls to easily access them in the template
  get userType() { return this.loginForm.get('userTypes'); }
  get username() { return this.loginForm.get('username'); }
  get passwordHash() { return this.loginForm.get('passwordHash'); }
}
