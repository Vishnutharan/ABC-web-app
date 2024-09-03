import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Staff } from '../models/Staffs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl = 'https://localhost:7293/api/Staff';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Fetch all staff entries
  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Fetch a single staff entry by ID
  getStaffById(id: number): Observable<Staff> {
    return this.http.get<Staff>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Add a new staff entry
// Add a new staff entry
addStaff(staff: Staff): Observable<Staff> {
  return this.http.post<Staff>(this.apiUrl, staff, this.httpOptions)
      .pipe(
          catchError(this.handleError)
      );
}


  // Update an existing staff entry
  updateStaff(staff: Staff): Observable<any> {
    return this.http.put(`${this.apiUrl}/${staff.id}`, staff, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete a staff entry by ID
  deleteStaff(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling method
  private handleError(error: any) {
    console.error('An error occurred:', error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
