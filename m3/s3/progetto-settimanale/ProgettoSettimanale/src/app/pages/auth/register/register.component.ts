import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { IResister } from '../Models/i-resister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  registerData:IResister = {
    email: '',
    password: ''
  }


  save(){
    this.authSvc.signUp(this.registerData)
    .subscribe(data => {
        this.router.navigate(['/auth/login'])
    })
  }

}
