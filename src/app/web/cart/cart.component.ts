import { CartService } from './../../../services/cart.service';
import { BroadcastService, BRODCAST_KEYS } from '../../../services/broadcast.service';
import { EmitterService } from '../../../services/emitter.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  count = 0;
  products: any;
  totalPrice: number;

  constructor(private emitterService: EmitterService,
    private broadcastService: BroadcastService,
    private productService: ProductService,
    private cartService: CartService,
  ) {
    this.emitterService.data.subscribe(success => {
      console.log('MyCount');
    });
  }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    const item = this.cartService.loadCart();
    if (item != null) {
      this.products = item.items;
      this.totalPrice = item.total;
    } else {
      this.products = [];
      this.totalPrice = 0;
    }

  }

  delete(product) {
    this.cartService.remove(product.id);
    this.getCartItems();
    const count = this.products.length;
    this.broadcastService.broadcast(BRODCAST_KEYS.DELETE_VALUE_FROM_CART, count);
    this.getCartItems();
  }
}
