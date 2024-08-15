import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Add this method
  toggleSidenav() {
    console.log('Toggling sidenav');
    // Here you would implement or trigger the actual sidenav toggle logic.
    // For example, you might emit an event or change a variable state that opens/closes the sidenav.
  }

}
