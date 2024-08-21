import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { PaymentComponent } from '/ABC-Rest/ABC-web-app/src/app/Componant/payment/payment.component';
import { PaymentComponent } from 'src/app/Componant/payment/payment.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuItems = [
    { name: 'Pork Sandwich', description: 'They\'re wherein heaven seed hath nothing.', price: 40.00, img: '/assets/sand2.webp' },
    { name: 'Biriyani', description: 'They\'re wherein heaven seed hath nothing.', price: 40.00, img: '/assets/biriyani1.webp' },
    { name: 'kothu barota', description: 'They\'re wherein heaven seed hath nothing.', price: 40.00, img: '/assets/kothu2.webp' },
    { name: 'Noodles', description: 'They\'re wherein heaven seed hath nothing.', price: 40.00, img: '/assets/noodel1.webp' },

  ];

  selectedItem: any = null;
  quantity: number = 1;
  total: number = 0;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  openModal(item: any): void {
    this.selectedItem = item;
    this.quantity = 1;
    this.updateTotal();
  }

  openPaymentModal(): void {
    const modalRef = this.modalService.open(PaymentComponent, { centered: true });
  }

  updateTotal(): void {
    this.total = this.selectedItem.price * this.quantity;
  }

  closeModal(): void {
    this.selectedItem = null;
  }

  processPayment(): void {
    const formattedTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.total);
    alert(`Total payment of ${formattedTotal} processed.`);
  }
}
