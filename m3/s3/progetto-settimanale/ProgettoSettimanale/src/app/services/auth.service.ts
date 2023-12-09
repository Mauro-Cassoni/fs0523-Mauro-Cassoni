import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';
import { iAccessData } from '../pages/auth/Models/i-access-data';
import { ILogin } from '../pages/auth/Models/i-login';
import { IRegister } from '../pages/auth/Models/i-register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper:JwtHelperService = new JwtHelperService()

  authSubject = new BehaviorSubject<iAccessData|null>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => !!user))

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

    this.restoreUser()

  }

  registerUrl:string = environment.apiUrl + '/register';
  loginUrl:string = environment.apiUrl + '/login'

  signUp(data:IRegister):Observable<iAccessData>{
    return this.http.post<iAccessData>(this.registerUrl, data)
  }

  login(data:ILogin):Observable<iAccessData>{
    return this.http.post<iAccessData>(this.loginUrl, data)
    .pipe(tap(data => {

      this.authSubject.next(data)
      localStorage.setItem('accessData',JSON.stringify(data))


      this.autoLogout(data.accessToken)
    }))
  }

  autoLogout(jwt:string){
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime();

    setTimeout(()=>{
      this.logout()
    },expMs)
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
  }

  restoreUser(){

      const userJson:string|null =  localStorage.getItem('accessData');
      if(!userJson) return;

      const accessData:iAccessData = JSON.parse(userJson);
      if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

      this.authSubject.next(accessData)
      this.autoLogout(accessData.accessToken)
  }


  errors(err: any) {
    switch (err.error) {
        case "Email and Password are required":
            return new Error('Email e password obbligatorie');
            break;
        case "Email already exists":
            return new Error('Utente esistente');
            break;
        case 'Email format is invalid':
            return new Error('Email scritta male');
            break;
        case 'Cannot find user':
            return new Error('utente inesistente');
            break;
            default:
        return new Error('Errore');
            break;
    }
  }

}
