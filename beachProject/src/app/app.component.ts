import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { BeachListService } from './beach-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  MarineParams: object = {
    key: "826ac9715aae4317b1204900200309",
    q: "34.03,118.87",
    format: "json",
    tide: "yes"
  }

  BeachParms: object = {
    key: "AIzaSyDD7HwmzWqfAPVxNACmt4Of17BVsbL3gjE",
    city: "Detroit"
  }



  constructor(private weather: WeatherService, private beach: BeachListService){}

  ngOnInit(){
    this.weather.getMarineWeather(this.MarineParams).subscribe(data =>{
      console.log(data);
    });

    this.beach.getBeaches(this.BeachParms).subscribe(data =>{
      console.log(data);
    })
  }
}
