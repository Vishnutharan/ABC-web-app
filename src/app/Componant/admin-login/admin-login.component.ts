import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Handle login logic here
    console.log('Login attempted');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}