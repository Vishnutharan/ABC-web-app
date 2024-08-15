import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/LoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      userType: ['', Validators.required],
      username: ['', Validators.required],
      passwordHash: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { userType, username, passwordHash } = this.loginForm.value;
      const loginRequest: LoginRequest = { userType, username, passwordHash };

      this.userService.login(loginRequest).subscribe({
        next: () => {
          switch (userType) {
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

  get userType() {
    return this.loginForm.get('userType');
  }

  get username() {
    return this.loginForm.get('username');
  }

  get passwordHash() {
    return this.loginForm.get('passwordHash');
  }
}
