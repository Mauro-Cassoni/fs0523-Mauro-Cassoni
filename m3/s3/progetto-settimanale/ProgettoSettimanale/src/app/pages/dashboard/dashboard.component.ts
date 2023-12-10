import { catchError, tap } from 'rxjs';
import { ICity } from '../auth/Models/i-city';
import { MeteoService } from './../../services/meteo.service';
import { Component } from '@angular/core';
import { IWeathers } from '../auth/Models/i-weathers';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  searchQuery: string = '';
  cityData: ICity[] = [];
  weatherData!: IWeathers | undefined;
  cityName: string = '';
  http: any;
  authService: any;
  preferitiService: any;
  isSearchButtonDisabled: boolean = true;

  constructor(private meteoSvc: MeteoService) { }

  search() {
    this.weatherData = undefined
    this.meteoSvc.getGeoData(this.cityName)
      .pipe(
        tap((data: ICity[]) => {
          this.cityData = data;
        }),
        catchError((error) => {
          console.error('Errore durante la chiamata API:', error);
          throw error;
        })
      )
      .subscribe();
  }

  getCityWeather(lat: number, lon: number) {
    this.cityData = [];

    this.meteoSvc.getCityWeather(lat, lon)
      .pipe(
        tap((data: any) => {
          this.weatherData = data;
        })
      )
      .subscribe();
  }

  onCityNameChange() {
    this.isSearchButtonDisabled = this.cityName.trim() === '';
  }

  getBackgroundColor(weatherType: string): string {
    switch (weatherType.toLowerCase()) {
      case 'clear':
        return 'gold';
      case 'clouds':
        return 'lightslategray';
      case 'rain':
        return 'powderblue';
      case 'snow':
        return 'lightblue';
      default:
        return 'white';
    }
  }

}
