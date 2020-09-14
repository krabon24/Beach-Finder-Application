import { Component, OnInit } from '@angular/core';
import { BeachListService } from "../beach-list.service";
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css']
})
export class BeachesComponent implements OnInit {

  constructor(private beaches: BeachListService, private weather: WeatherService) { }

  ngOnInit(): void {
  }

  getBeaches(){ 
    return this.beaches.beachName;
  }

  getWeather(){
    return this.weather.weatherInfo;
  }

}
