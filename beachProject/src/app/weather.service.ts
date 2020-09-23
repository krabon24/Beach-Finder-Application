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
      key: "c59b87f400814d0d85261311202309",
      q: longlat,
      format: "json",
      tide: "yes"
    }
    const returnMarine = this.http.get('http://api.worldweatheronline.com/premium/v1/marine.ashx', {params: marineParameters});
    return returnMarine;

  }
}
