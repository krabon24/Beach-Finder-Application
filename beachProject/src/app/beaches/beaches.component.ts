import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { BeachListService } from '../beach-list.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css'],
})
export class BeachesComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  zoom: any = 11;
  showDetail: boolean;
  selectedBeach: any;
  infoContent: any = '';
  options: google.maps.MapOptions;
  center: any = new google.maps.LatLng({
    lat: 42.345409,
    lng: -82.9780668,
  });


  favoriteBeach: any;

  constructor(private beaches: BeachListService, private weather: WeatherService) { }

  ngOnInit(): void {
  }

  getBeaches(){
    return this.beaches.beachName;
  }

  getMarineWeather() {
    return this.weather.weatherInfo;
  }

  getMarkers() {
    return this.beaches.markers;
  }
  
 displayDetail(beach: any) { 
    this.showDetail = true;
    this.selectedBeach = beach;
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  openInfo(marker: MapMarker, info) {
    let infoWindow = new google.maps.InfoWindow({
      content: info,
    });
    infoWindow.setPosition(marker.position);
    this.infoWindow.open(marker);
    this.infoContent = info;
  }
  getCenter() {
    if (!this.beaches.beachName[0]) { 
      return new google.maps.LatLng({
        lat: 0,
        lng: 0,
      });
    }
  }

  addFavorites(beach: any) { 
    this.beaches.favoriteBeaches.push(beach);
  }

  search() { 
    let centered = new google.maps.LatLng({
      lat: this.beaches.beachName[0]?.geometry.location.lat,
      lng: this.beaches.beachName[0]?.geometry.location.lng,
    });
    this.center = centered;
  }
}
