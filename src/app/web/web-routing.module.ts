import { WebComponent } from './web.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'product', loadChildren: './product/product.module#ProductModule' },
      { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
      { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
