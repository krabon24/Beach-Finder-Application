import { Component, OnInit } from '@angular/core';
import { BeachListService } from "../beach-list.service";
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css']
})
export class BeachesComponent implements OnInit {
  showDetail: boolean;
  selectedBeach: any

  constructor(private beaches: BeachListService, private weather: WeatherService) { }

  ngOnInit(): void {
  }

  getBeaches(){ 
    return this.beaches.beachName;
  }

  getMarineWeather(){
    return this.weather.weatherInfo;
  }

  getMarkers() {
    return this.beaches.markers;
  }

  // displayDetail(beach: any) { 
  //   this.showDetail = true;
  //   this.selectedBeach = beach.recipe;
  // }

}
