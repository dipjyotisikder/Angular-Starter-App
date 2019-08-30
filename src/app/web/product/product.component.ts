import { CartService } from 'src/services/cart.service';
import { BroadcastService, BRODCAST_KEYS } from './../../../services/broadcast.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;

  constructor(
    private broadcastService: BroadcastService,
    private productService: ProductService,
    private cartService: CartService,
  ) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.get();
  }

  addToCart(product) {
    this.productService.addToCart(product);
    const data = this.cartService.loadCart();
    this.broadcastService.broadcast(BRODCAST_KEYS.ADD_VALUE_TO_CART, data.items.length)
  }
}
