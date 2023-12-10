import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  private subscription: Subscription = new Subscription();
  isLoggedIn$ = this.authService.isLoggedIn$; // Aggiungi questa linea

  constructor(private authService: AuthService) {
    this.subscription.add(
      this.isLoggedIn$.subscribe(isLoggedIn => {
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}
