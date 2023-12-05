import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { HttpClientModule } from '@angular/common/http';
import { CardPreferitiComponent } from './components/card-preferiti/card-preferiti.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreferitiComponent,
    CarrelloComponent,
    NavbarComponent,
    CardProductComponent,
    CardPreferitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
