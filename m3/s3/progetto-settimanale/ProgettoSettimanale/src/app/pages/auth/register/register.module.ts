import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RegisterModule { }
