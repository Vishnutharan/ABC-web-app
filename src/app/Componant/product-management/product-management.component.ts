// src/app/components/product-management/product-management.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  productForm: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      id: [0],
      productName: [''],
      price: [0],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      console.log('Fetched products:', data);
      this.products = data;
    });
  }
  
  
  

  selectProduct(product: Product): void {
    console.log('Selected product:', product);
    this.selectedProduct = product;
    this.productForm.patchValue(product);
  }
  

  saveProduct(): void {
    if (this.productForm.value.id) {
      this.productService.updateProduct(this.productForm.value).subscribe(() => {
        this.loadProducts();
        this.clearForm();
      });
    } else {
      this.productService.addProduct(this.productForm.value).subscribe(() => {
        this.loadProducts();
        this.clearForm();
      });
    }
  }

  deleteProduct(id: number): void {
    const testId = 1; // Replace 1 with a valid product ID from your database
    this.productService.deleteProduct(testId).subscribe(() => {
      this.loadProducts();
    }, error => {
      console.error('Failed to delete product:', error);
    });
  }
  
  
  
  

  clearForm(): void {
    this.selectedProduct = null;
    this.productForm.reset({ id: 0, productName: '', price: 0, description: '' });
  }
}
