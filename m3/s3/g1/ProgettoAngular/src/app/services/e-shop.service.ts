import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EShopService {

  prodotti:IProduct[] = [];
  carrello:IProduct[] = [];
  preferiti:IProduct[] = [];

  apiUrl:string = ' https://dummyjson.com/products';

  private preferitiSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  private saveLocalStorage() {
    localStorage.setItem('preferiti', JSON.stringify(this.preferiti));
  }

  addPreferiti(product: IProduct) {
    this.preferiti.push(product);
    this.saveLocalStorage();
    this.preferitiSubject.next(this.preferiti);
  }

  removePreferiti(){

  }

  getPreferiti(): Observable<IProduct[]> {
    const preferitiFromLocalStorage = localStorage.getItem('preferiti');

    if (preferitiFromLocalStorage !== null) {
      this.preferiti = JSON.parse(preferitiFromLocalStorage);
    } else {
      this.preferiti = [];
    }

    this.preferitiSubject.next(this.preferiti);
    return this.preferitiSubject.asObservable();
  }
}
