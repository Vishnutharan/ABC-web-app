import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-query',
  templateUrl: './customer-query.component.html',
  styleUrls: ['./customer-query.component.css']
})
export class CustomerQueryComponent {
  query = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  submitQuery(): void {
    this.http.post('http://localhost:4200/queries', this.query)
      .subscribe(response => console.log('Query submitted', response));
  }
}
