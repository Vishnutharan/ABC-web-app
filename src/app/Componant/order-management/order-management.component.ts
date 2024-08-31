import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/Booking'; // Make sure this is correctly imported

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
  bookings: Booking[] = [];
  currentBooking: Booking = this.initializeBooking(); // Ensure always initialized

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.loadAllBookings();
  }
  initializeBooking(): Booking {
    let today = new Date();
    let dateString = today.toISOString().substring(0, 10); // Converts date to 'yyyy-MM-dd' format
    return {
      id: 0,
      date: new Date(),  // Initializes to current date; adjust as needed
      name: '',
      email: '',
      persons: 1,
      phoneNumber: '',
      time: '',
      note: ''
    };
  }
  

  

  loadAllBookings(): void {
    this.bookingService.getAllBookings().subscribe({
      next: (data: Booking[]) => this.bookings = data,
      error: (err) => console.error('Failed to get bookings', err)
    });
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      alert('Please fill in all required fields correctly.');
      return;
    }
    this.bookingService.addBooking(this.currentBooking).subscribe({
      next: () => {
        this.loadAllBookings();
        form.reset();
        this.currentBooking = this.initializeBooking();  // Reset currentBooking
      },
      error: (err) => {
        console.error('Failed to add booking', err);
        alert(`Error: ${err.error.title}\nDetails: ${JSON.stringify(err.error.errors)}`);
      }
    });
  }
  
  onEdit(booking: Booking): void {
    this.currentBooking = {...booking};
  }

  onDelete(id: number): void {
    this.bookingService.deleteBooking(id).subscribe({
      next: () => this.loadAllBookings(),
      error: (err) => console.error('Failed to delete booking', err)
    });
  }

  resetForm(form: NgForm): void {
    form.reset();
    this.currentBooking = this.initializeBooking();
  }
}
