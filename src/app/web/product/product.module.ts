import { ProductService } from './../../../services/product.service';

import { ProductRoutingModule } from './product-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { CartService } from 'src/services/cart.service';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule],
  providers: [ProductService, CartService]
})
export class ProductModule { }
