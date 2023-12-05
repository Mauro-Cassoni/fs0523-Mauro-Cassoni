import { Component } from '@angular/core';
import { EShopService } from '../../services/e-shop.service';

@Component({
  selector: '.app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private productSvc:EShopService){}

  getPreferitiClick(){
    this.productSvc.getPreferiti();
  }

}
