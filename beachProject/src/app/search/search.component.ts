import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { BeachListService } from '../beach-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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

  constructor(private weather: WeatherService, private beaches: BeachListService) { }

  ngOnInit(): void {
  }

  searchFormSubmitted(formData: any) {
    const BeachParms: any = {
      key: "AIzaSyDD7HwmzWqfAPVxNACmt4Of17BVsbL3gjE",
      city: formData.city
    }
    this.beaches.getBeaches(BeachParms).subscribe((data: any) => {
      console.log(data.results)
      this.beaches.beachName = data.results.filter(beach => beach.formatted_address.includes(formData.city));
      
      // const coordinatesLat = data.results.geometry.location.lat;
      // const coordinatesLng = data.results.geometry.location.lng;
    });

    // this.weather.getMarineWeather()


  }
}
