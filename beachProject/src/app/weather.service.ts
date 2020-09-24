import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherInfo: any = [];
  longlat: [] = []

  constructor(private http: HttpClient) { }
  
  getMarineWeather(longlat): Observable <any> {
    const marineParameters = {
      key: "826ac9715aae4317b1204900200309",
      // key: "c19f84e4d89b4adca22125735202109",
      q: longlat,
      format: "json",
      tide: "yes"
    }
    const returnMarine = this.http.get('http://api.worldweatheronline.com/premium/v1/marine.ashx', {params: marineParameters});
    return returnMarine;

  }
}
