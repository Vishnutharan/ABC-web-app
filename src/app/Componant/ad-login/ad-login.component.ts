import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-ad-login',
  templateUrl: './ad-login.component.html',
  styleUrls: ['./ad-login.component.css']
})
export class AdLoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  validUsers = [
    { email: 'vishnu', password: '7788' },
    // Add more valid users if needed
  ];

  constructor(private router: Router) { } // Inject the router

  ngOnInit(): void { }

  onSubmit(): void {
    const user = this.validUsers.find(user => user.email === this.email && user.password === this.password);
    if (user) {
      this.router.navigate(['/admindashboard']); // Redirect to admin dashboard
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
