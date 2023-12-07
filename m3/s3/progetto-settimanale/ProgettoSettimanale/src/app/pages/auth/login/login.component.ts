import { Component } from '@angular/core';
import { ILogin } from '../Models/i-login';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  loginData:ILogin = {
    email: '',
    password: ''
  }

  save(){
    this.authSvc.login(this.loginData)
    .subscribe(data => {
        this.router.navigate(['/dashboard'])
    })
  }
}
