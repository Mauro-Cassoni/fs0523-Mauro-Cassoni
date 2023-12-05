import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { EShopService } from '../../services/e-shop.service';

@Component({
  selector: '.app-card-preferiti',
  templateUrl: './card-preferiti.component.html',
  styleUrl: './card-preferiti.component.scss'
})
export class CardPreferitiComponent {
  products: IProduct[] = [];

  constructor(private productSvc:EShopService){}

  ngOnInit(){
    this.productSvc.getPreferiti().subscribe(data => this.products = data)
  }

  rimuoviPreferiti(product: IProduct){
    // this.productSvc.removePreferiti(product)
  }
}
