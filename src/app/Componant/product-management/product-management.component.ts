import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// Add this method
toggleSidenav() {
  console.log('Toggling sidenav');
  // Here you would implement or trigger the actual sidenav toggle logic.
  // For example, you might emit an event or change a variable state that opens/closes the sidenav.
}
blockItem() {
  // Add logic to block the item
  console.log('Block item logic');
}

unblockItem() {
  // Add logic to unblock the item
  console.log('Unblock item logic');
}

deleteItem() {
  // Add logic to delete the item
  console.log('Delete item logic');
}

downloadList() {
  // Add logic to download the list
  console.log('Download list logic');
}
}
