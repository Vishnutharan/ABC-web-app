import { Component, OnInit } from '@angular/core';
import { Reservation, ReservationDataComponent } from '../reservation-data/reservation-data.component';

@Component({
  selector: 'app-reservation-manager',
  templateUrl: './reservation-manager-component.component.html',
  styleUrls: ['./reservation-manager-component.component.css']
})

export class ReservationManagerComponent implements OnInit {
  reservations: Reservation[] = [];
  selectedReservation: Reservation | null = null;

    constructor(private reservationService: ReservationDataComponent) { }

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservations = this.reservationService.getAllReservations();
  }

  selectReservation(reservation: Reservation): void {
    this.selectedReservation = { ...reservation }; // Create a copy for editing
  }

  saveReservation(): void {
    if (this.selectedReservation !== null) {
      this.reservationService.updateReservation(this.selectedReservation);
      this.loadReservations();
    } else {
      console.error('Attempted to save a null reservation');
      
    }
  }
  
  deleteReservation(id: number): void {
    this.reservationService.deleteReservation(id);
    this.loadReservations(); // Reload to reflect the deletion
}
  

  cancelEdit(): void {
    this.selectedReservation = null;
  }
}
