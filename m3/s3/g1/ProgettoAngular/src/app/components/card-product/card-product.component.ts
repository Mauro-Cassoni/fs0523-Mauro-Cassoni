import { Component } from '@angular/core';
import { EShopService } from '../../services/e-shop.service';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: '.app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {

  products: IProduct[] = [];

  constructor(private productSvc:EShopService){}

  ngOnInit(){
    this.productSvc.getAll().subscribe(data => this.products = data.products)
  }

  aggiungiPreferiti(product: IProduct){
    this.productSvc.addPreferiti(product)
  }
}
