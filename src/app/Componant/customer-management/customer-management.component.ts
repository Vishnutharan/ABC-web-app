import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
