import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(data:any): Observable <any>{
    
    const weatherParameters = {
      q: data.q,
      key: "fc1601812744410bbfb14416200309",
      days: data.days
    }
    const returnWeather = this.http.get('http://api.weatherapi.com/v1/forecast.json', {params: weatherParameters});
    return returnWeather;
  }
  
  getMarineWeather(data:any): Observable <any> {
    const marineParameters = {
      key: "826ac9715aae4317b1204900200309",
      q: data.q,
      format: data.format,
      tide: data.tide
    }
    const returnMarine = this.http.get('http://api.worldweatheronline.com/premium/v1/marine.ashx', {params: marineParameters});
    return returnMarine;

  }
}
