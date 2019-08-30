import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // loadChildren: './login/login.module#LoginModule',
    component: AuthComponent,
    children: [
      { path: '', loadChildren: './login/login.module#LoginModule' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' }
    ]
  }
];
// const routes: Routes = [{ path: '', loadChildren: './auth/auth.module#AuthModule' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
