import { catchError, tap } from 'rxjs';
import { ICity } from '../auth/Models/i-city';
import { MeteoService } from './../../services/meteo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  searchQuery: string = '';
  weatherData: ICity[] = [];
  cityName: any;

  constructor(private meteoSvc: MeteoService) { }

  search() {
    this.meteoSvc.getGeoData(this.cityName)
      .pipe(
        tap((data: ICity[]) => {
          this.weatherData = data;
        }),
        catchError((error) => {
          console.error('Errore durante la chiamata API:', error);
          throw error;
        })
      )
      .subscribe();
  }

  getCityWeather(){
    this.meteoSvc.getCityWeather()
  }
}
