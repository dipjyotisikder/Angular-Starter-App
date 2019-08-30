import { Cart } from './../app/models/cart/cart-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // NavbarCounts
  navbarCartCount = 0;
  navbarFavProdCount = 0;
  products: any;
  total: number;
  items: any;

  cartModel: Cart;

  constructor() {
    // this.calculateLocalCartProdCounts();
  }
  get() {
    const pro = [
      { id: 1, name: 'Apple', price: 20 },
      { id: 2, name: 'Orange', price: 20 },
      { id: 3, name: 'Banana', price: 20 },
      { id: 4, name: 'Pinapple', price: 20 },
      { id: 5, name: 'Mango', price: 20 }
    ]
    this.products = pro;
    return pro;

  }


  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }


  /*
 ----------  Cart Product Function  ----------
*/

  // Adding new Product to cart db if logged in else localStorage
  addToCart(product: Product): void {
    // let a: Product[];

    // a = JSON.parse(localStorage.getItem('avct_item')) || [];

    // a.push(data);
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

    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
      this.cartModel.items = this.items;
      this.cartModel.total = this.total;

      return this.cartModel;
    }
  }
}
export class Product {

  id: string;
  name: string;
  price: number;
  photo: string;

}

export class Item {
  product: Product;
  quantity: number;
}


