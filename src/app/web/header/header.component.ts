import { CartService } from './../../../services/cart.service';
import { NavbarService } from './../../../services/navbar.service';
import { BRODCAST_KEYS, BroadcastService } from './../../../services/broadcast.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  active = false;
  cartCount: number;

  activeClass = "active";
  names = [];
  menus: any;
  selectedMenu = '/home';


  constructor(private router: Router,
    private broadcastService: BroadcastService,
    private navbarService: NavbarService,
    private productService: ProductService,
    private cartService: CartService,

  ) {

    this.broadcastService.on(BRODCAST_KEYS.ADD_VALUE_TO_CART).subscribe(
      (success) => {
        this.cartCount = <any>success;
      }
    );
    this.broadcastService.on(BRODCAST_KEYS.DELETE_VALUE_FROM_CART).subscribe(
      (success) => {
        this.cartCount = <any>success;
      }
    );
    this.router.events.subscribe(success => {
      const val = success['url'];
    });


  }

  ngOnInit() {
    const item = this.cartService.loadCart();
    if (item != null) {
      this.cartCount = item.items.length;
    } else {
      this.cartCount = 0;
    }


    this.getNames();
    this.menus = this.navbarService.getMenus();
  }
  getNames() {
    const names = [
      'abcd',
      'asdashd',
      'asdashd'
    ]

    names.forEach(element => {
      this.names.push(element);
    });
  }

  select(route) {
    this.selectedMenu = route;
    // this.router.navigateByUrl(`${route}`);
  }
}
