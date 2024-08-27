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
  blockItem() {
    // Add logic to block the item
    console.log('Block item logic');
  }

  unblockItem() {
    // Add logic to unblock the item
    console.log('Unblock item logic');
  }

  deleteItem() {
    // Add logic to delete the item
    console.log('Delete item logic');
  }

  downloadList() {
    // Add logic to download the list
    console.log('Download list logic');
  }
  orders = [
    {
      id: 1,
      customerName: "Victor Dias",
      orderId: "COD-1482264017",
      orderDate: "07/26/2019",
      orderAmount: "350.00",
      paymentStatus: "Success",
      invoice: "View",
      actions: "Track Order"
    }
  ];

  searchCriteria = {
    orderId: '',
    fromDate: '',
    toDate: '',
    orderStatus: ''
  };

  onSearch(event: Event) {
    event.preventDefault();
    // Implement search functionality based on searchCriteria
    console.log(this.searchCriteria);
  }

  onReset() {
    this.searchCriteria = {
      orderId: '',
      fromDate: '',
      toDate: '',
      orderStatus: ''
    };
  }

}
