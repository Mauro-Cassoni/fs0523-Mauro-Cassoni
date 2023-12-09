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
  weatherData: IWeathers[] = [];
  cityName: any;

  constructor(private meteoSvc: MeteoService) { }

  search() {
    this.weatherData = [];

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
          this.weatherData = [data];
          this.convertKelvinToCelsius();
        })
      )
      .subscribe();
  }

  convertKelvinToCelsius() {
    if (this.weatherData && this.weatherData.length > 0) {
      this.weatherData.forEach(cityW => {
        if (cityW.list && cityW.list.length > 0) {
          cityW.list.forEach(weather => {
            weather.main.temp = weather.main.temp - 273.15;
          });
        }
      });
    }
  }
}
