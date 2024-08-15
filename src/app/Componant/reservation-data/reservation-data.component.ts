import { Component, OnInit } from '@angular/core';
export interface Reservation {

  id: number;
  name: string;
  date: Date;
  status: string;
}
@Component({
  selector: 'app-reservation-data',
  templateUrl: './reservation-data.component.html',
  styleUrls: ['./reservation-data.component.css']
})

export class ReservationDataComponent  {

  private reservations: Reservation[] = [
    { id: 1, name: 'John Doe', date: new Date(), status: 'Confirmed' },
    { id: 2, name: 'Jane Smith', date: new Date(), status: 'Pending' },
    { id: 3, name: 'Alice Johnson', date: new Date(), status: 'Cancelled' }
];

constructor() { }

getAllReservations(): Reservation[] {
    return this.reservations;
}

getReservationById(id: number): Reservation | undefined {
  return this.reservations.find(res => res.id === id);
}

updateReservation(reservation: Reservation): void {
    const index = this.reservations.findIndex(res => res.id === reservation.id);
    if (index !== -1) {
        this.reservations[index] = reservation;
    }
}

deleteReservation(id: number): void {
    this.reservations = this.reservations.filter(res => res.id !== id);
}

}
