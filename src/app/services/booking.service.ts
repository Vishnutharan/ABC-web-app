import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/Booking'; // Define Booking model based on the structure

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'https://localhost:7293/api/Booking';
  

  constructor(private http: HttpClient) { }

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  getBookingById(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/${id}`);
  }

// Example Angular service method to add a booking
addBooking(booking: Booking): Observable<Booking> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.post<Booking>(this.apiUrl, booking, { headers });
}


  updateBooking(booking: Booking): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${booking.id}`, booking);
  }

  deleteBooking(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
