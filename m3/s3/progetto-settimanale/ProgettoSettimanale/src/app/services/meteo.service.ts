import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICity } from '../pages/auth/Models/i-city';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http:HttpClient) { }

  private cityUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  private weatherUrl = 'api.openweathermap.org/data/2.5/forecast';
  private apiKey = '56b8dd9b017e43d661595c6d7ad0a2a9';

  getGeoData(city:string):Observable<any>{

  const params = new HttpParams()
      .set('q', city)
      .set('limit', '5')
      .set('appid', this.apiKey);

      const apiUrlWithParams = `${this.cityUrl}?${params.toString()}`;

    return this.http.get(apiUrlWithParams);
  }

  getCityWeather(){

  const params = new HttpParams()
  // .set('lat', lat)
  // .set('lon', lon)
  .set('appid', this.apiKey);

  const apiUrlWithParams = `${this.weatherUrl}?${params.toString()}`;
  console.log(apiUrlWithParams);


return this.http.get(apiUrlWithParams);
  }

}
