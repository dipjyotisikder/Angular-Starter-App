import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './web/web.module#WebModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
