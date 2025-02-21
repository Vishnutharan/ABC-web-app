import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';
  rememberMe: boolean = false;
  currentDateTime: Date = new Date();

  constructor() {}

  ngOnInit() {
    // Update current time every second
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  onSubmit() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Simulate API call
    setTimeout(() => {
      try {
        // Your login logic here
        console.log('Login attempted');
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        console.log('Remember Me:', this.rememberMe);
        
        // Reset form after successful login
        // this.router.navigate(['/dashboard']); // Uncomment and import Router if you want to navigate
      } catch (error) {
        this.errorMessage = 'Invalid username or password';
      } finally {
        this.isLoading = false;
      }
    }, 1500); // Simulated delay
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}