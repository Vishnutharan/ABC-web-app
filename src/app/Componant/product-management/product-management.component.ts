import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  products$: Observable<Product[]> = new Observable();
  editingProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products$ = this.productService.getProducts();
  }

  startEdit(product: Product): void {
    this.editingProduct = { ...product };
  }

  updateProduct(): void {
    if (this.editingProduct) {
      this.productService.updateProduct(this.editingProduct).subscribe({
        next: () => this.onSaveSuccess(),
        error: (err: any) => this.handleError('Failed to update product', err)
      });
    }
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => this.loadProducts(),
      error: (err: any) => this.handleError('Failed to delete product', err)
    });
  }

  cancelEdit(): void {
    this.editingProduct = null;
  }

  blockItem(): void {
    // Implement logic to block an item
    console.log('Item blocked');
  }

  unblockItem(): void {
    // Implement logic to unblock an item
    console.log('Item unblocked');
  }

  deleteItem(): void {
    // Implement logic to delete an item
    console.log('Item deleted');
  }

  downloadList(): void {
    this.productService.downloadProductList().subscribe({
      next: (data: Blob) => {
        const blob = new Blob([data], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'products_list.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      },
      error: (err: any) => this.handleError('Failed to download the list', err)
    });
  }

  private onSaveSuccess(): void {
    this.loadProducts();
    this.editingProduct = null;
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
  }
}
