import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { BeachListService } from './beach-list.service';
import { DEFAULT_MARKER_OPTIONS } from '@angular/google-maps/map-marker/map-marker';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  

  constructor(private weather: WeatherService, private beach: BeachListService){}

  ngOnInit(){
  }
}
