import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from 'src/app/Componant/payment/payment.component';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    // Define animations here
  ]
})
export class HomeComponent implements OnInit {
  menuItems = [
    { name: 'Pork Sandwich', description: 'They\'re wherein heaven seed hath nothing.', price: 40.00, img: '/assets/sand2.webp' },
    { name: 'Biriyani', description: 'They\'re wherein heaven seed hath nothing.', price: 40.00, img: '/assets/biriyani1.webp' },
    { name: 'Kothu Barota', description: 'They\'re wherein heaven seed hath nothing.', price: 40.00, img: '/assets/kothu2.webp' },
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
    modalRef.result.then((result) => {
      console.log('Payment modal closed with:', result);
    }, (reason) => {
      console.log('Dismissed:', reason);
    });
  }

  updateTotal(): void {
    this.total = this.selectedItem ? this.selectedItem.price * this.quantity : 0;
  }

  closeModal(): void {
    this.selectedItem = null;
  }

  printPDF(): void {
    if (!this.selectedItem) {
      console.error('No item selected');
      return;
    }

    const doc = new jsPDF();
    doc.text(`Item Name: ${this.selectedItem.name}`, 10, 10);
    doc.text(`Description: ${this.selectedItem.description}`, 10, 20);
    doc.text(`Price: $${this.selectedItem.price.toFixed(2)}`, 10, 30);
    doc.text(`Quantity: ${this.quantity}`, 10, 40);
    doc.text(`Total: $${this.total.toFixed(2)}`, 10, 50);
    doc.save('OrderDetails.pdf');
  }
}