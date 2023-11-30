import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostAttiviComponent } from './pages/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './pages/post-inattivi/post-inattivi.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InactiveCardComponent } from './components/inactive-card/inactive-card.component';
import { ActiveCardComponent } from './components/active-card/active-card.component';
import { UpperCaseTextPipe } from './pipes/upper-case-text.pipe';
import { HighlightTextDirective } from './directives/highlight-text.directive';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    InactiveCardComponent,
    ActiveCardComponent,
    UpperCaseTextPipe,
    HighlightTextDirective,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
