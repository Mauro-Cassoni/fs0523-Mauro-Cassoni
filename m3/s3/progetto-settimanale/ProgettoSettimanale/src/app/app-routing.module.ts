import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
{ path: 'login',title: 'Login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },
{ path: 'register',title: 'Register', loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
