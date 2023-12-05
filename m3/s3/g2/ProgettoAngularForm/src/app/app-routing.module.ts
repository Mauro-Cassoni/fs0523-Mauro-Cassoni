import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'login'
  },
  {
    path: 'form',
    component: FormComponent,
    title: 'form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
