import { Component, OnInit } from '@angular/core';
interface Reservation {
  name: string;
  date: Date;
  status: string;
}

@Component({
  selector: 'app-dashboard-structure',
  templateUrl: './dashboard-structure.component.html',
  styleUrls: ['./dashboard-structure.component.css']
})
export class DashboardStructureComponent implements OnInit {

  totalReservations: number = 120;
  todaysReservations: number = 3;
  pendingReservations: number = 17;
  reservations: Reservation[] = [
      { name: 'John Doe', date: new Date(), status: 'Confirmed' },
      { name: 'Jane Smith', date: new Date(), status: 'Pending' },
      { name: 'Alice Johnson', date: new Date(), status: 'Cancelled' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
