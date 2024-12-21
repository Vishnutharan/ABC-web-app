import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginRequest } from 'src/app/models/LoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginRequest: LoginRequest = this.loginForm.value;
      this.userService.login(loginRequest).subscribe({
        next: (response) => {
          // Handle successful login
          console.log('Login successful', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          // Handle login error
          console.error('Login error', error);
          this.errorMessage = error.error?.message || 'An error occurred during login. Please try again.';
          setTimeout(() => this.errorMessage = '', 5000); // Clear error after 5 seconds
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}