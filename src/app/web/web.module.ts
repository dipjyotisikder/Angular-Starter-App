import { CartService } from './../../services/cart.service';
import { WebRoutingModule } from './web-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { ProductService } from 'src/services/product.service';

@NgModule({
  declarations: [WebComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, WebRoutingModule],
  schemas: [],
  providers: [ProductService, CartService]
})
export class WebModule { }
