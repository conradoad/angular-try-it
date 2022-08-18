import { Injectable } from '@angular/core';

import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() { }

  addTocart(prodcut: Product) {
    this.items.push(prodcut);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
}
