import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // loadChildren: './login/login.module#LoginModule',
    component: LoginComponent
  }
];
// const routes: Routes = [{ path: '', loadChildren: './auth/auth.module#AuthModule' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
