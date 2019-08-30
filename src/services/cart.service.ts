import { Cart } from './../app/models/cart/cart-item';
import { Item, Product } from './product.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  total: number;
  items: Item[];
  cartModel: Cart = new Cart;

  constructor() { }



  /*
----------  Cart Product Function  ----------
*/
  addToCart(product: Product): void {

    // // this.toastrService.wait('Adding Product to Cart', 'Product Adding to the cart');
    // // setTimeout(() => {
    // localStorage.setItem('avct_item', JSON.stringify(a));
    // this.calculateLocalCartProdCounts();
    // // }, 500);
    // Casual
    var item: Item = {
      product: product,
      quantity: 1
    };
    if (localStorage.getItem('cart') == null) {
      let cart: any = [];
      cart.push(JSON.stringify(item));
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cart: any = JSON.parse(localStorage.getItem('cart'));
      let index: number = -1;
      for (var i = 0; i < cart.length; i++) {
        let item: Item = JSON.parse(cart[i]);
        if (item.product.id == product.id) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let item: Item = JSON.parse(cart[index]);
        item.quantity += 1;
        cart[index] = JSON.stringify(item);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  }


  loadCart(): Cart {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      return;
    }
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);

      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
    }
    this.cartModel.items = this.items;
    this.cartModel.total = this.total;
    return this.cartModel;
  }


  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
