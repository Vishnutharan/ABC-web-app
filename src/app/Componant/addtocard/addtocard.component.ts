import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocard',
  templateUrl: './addtocard.component.html',
  styleUrls: ['./addtocard.component.css']
})
export class AddtocardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'add-to-cart-app';
  quantity = 1;

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
