import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { BeachListService } from '../beach-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  MarineParams: object = {
    key: "826ac9715aae4317b1204900200309",
    q: "34.03,118.87",
    format: "json",
    tide: "yes"
  }
  
  markers: any = [];
  

  constructor(private weather: WeatherService, private beaches: BeachListService) { }

  ngOnInit(): void {
    this.beaches.markers = this.markers;
  }

  searchFormSubmitted(formData: any) {
    const BeachParms: any = {
      key: "AIzaSyDD7HwmzWqfAPVxNACmt4Of17BVsbL3gjE",
      city: formData.city
    }
    this.beaches.getBeaches(BeachParms).subscribe((data: any) => {
      this.beaches.beachName = data.results.filter(beach => beach.formatted_address.includes(formData.city));

      this.beaches.beachName.forEach((beach) => {
        this.weather.getMarineWeather(`${beach.geometry.location.lat},${beach.geometry.location.lng}`).subscribe((res) => {
          beach.weatherInfo = res;
          console.log(this.beaches.beachName);

          let marker: any = {};
        console.log(beach.geometry.location.lat);
        marker.position = new google.maps.LatLng({
          lat: beach.geometry.location.lat,
          lng: beach.geometry.location.lng,
        });
        // console.log(marker)
        this.markers.push(marker);
        });
      });
this.beaches.markers = this.markers;
console.log(this.markers);
    });
  };

}
