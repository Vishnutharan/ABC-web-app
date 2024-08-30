import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  editingProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.products$ = this.productService.getProducts();
  }

  startEdit(product: Product): void {
    this.editingProduct = { ...product };
  }

  updateProduct(): void {
    if (this.editingProduct) {
      this.productService.updateProduct(this.editingProduct).subscribe({
        next: () => this.onSaveSuccess(),
        error: (err) => this.handleError('Failed to update product', err)
      });
    }
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => this.loadProducts(),
      error: (err) => this.handleError('Failed to delete product', err)
    });
  }

  cancelEdit(): void {
    this.editingProduct = null;
  }

  private onSaveSuccess(): void {
    this.loadProducts();
    this.editingProduct = null;
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
  }
}

