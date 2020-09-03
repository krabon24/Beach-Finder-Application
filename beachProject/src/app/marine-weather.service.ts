import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarineWeatherService {

  constructor(private http: HttpClient) { }

  getWeather(data:any): Observable <any>{
    const parameters = {
      q: data.q,
      key: "826ac9715aae4317b1204900200309",
      
    }
    const returnWeather = this.http.get('http://api.worldweatheronline.com/premium/v1/marine.ashx', {params: parameters});
    return returnWeather
  }
}
