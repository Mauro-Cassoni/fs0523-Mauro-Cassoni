import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import { CompletatiComponent } from './pages/completati/completati.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';
import { TodoTableComponent } from './components/todo-table/todo-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletatiComponent,
    HeaderComponent,
    CreateComponent,
    TodoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
