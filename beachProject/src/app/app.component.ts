import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  WeatherParams: object = {
    q: "Detroit",
    key: "fc1601812744410bbfb14416200309",
    days: 3
  }

  MarineParams: object = {
    key: "826ac9715aae4317b1204900200309",
    q: "34.03,118.87",
    format: "json",
    tide: "yes"
  }

  constructor(private weather: WeatherService){}

  ngOnInit(){
    this.weather.getWeather(this.WeatherParams).subscribe(data =>{
      console.log(data);
    });
    this.weather.getMarineWeather(this.MarineParams).subscribe(data =>{
      console.log(data);
    });
  }
}
