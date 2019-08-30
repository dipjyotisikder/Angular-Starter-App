import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  menus: any;
  constructor() { }

  getMenus() {

    const menus = [

      { route: '/home', name: 'Home' },
      { route: '/about', name: 'About Us' },
      { route: '/product', name: 'Products' },
      { route: '/cart', name: 'Carts' },
      { route: '/contact', name: 'Contact Us' }
    ]
    return menus;
  }
}
