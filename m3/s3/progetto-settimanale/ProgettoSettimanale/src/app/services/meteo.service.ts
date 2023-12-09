import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IWeathers } from '../pages/auth/Models/i-weathers';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http:HttpClient) { }

  private cityUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  private weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  private apiKey = environment.apiKey;

  getGeoData(city:string):Observable<any>{

  const params = new HttpParams()
      .set('q', city)
      .set('limit', '5')
      .set('appid', this.apiKey);

      const apiUrlWithParams = `${this.cityUrl}?${params.toString()}`;

    return this.http.get(apiUrlWithParams);
  }

  getCityWeather(lat:number,lon:number):Observable<IWeathers>{

  const params = new HttpParams()
  .set('lat', lat)
  .set('lon', lon)
  .set('appid', this.apiKey);

  const apiUrlWithParams = `${this.weatherUrl}?${params.toString()}`;
  console.log(apiUrlWithParams);


return this.http.get<IWeathers>(apiUrlWithParams);
  }

}
