import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:HomeComponent,
    title: 'Home'
  },
  {
    path:'carrello',
    pathMatch:'full',
    component:CarrelloComponent,
    title: 'Carrello'
  },
  {
    path:'preferiti',
    pathMatch:'full',
    component:PreferitiComponent,
    title: 'Preferiti'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
