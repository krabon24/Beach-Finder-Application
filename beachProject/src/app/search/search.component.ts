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
      console.log(this.beaches.beachName);

      this.beaches.beachName.forEach((beach) => {
        this.weather.getMarineWeather(`${beach.geometry.location.lat, beach.geometry.location.lng}`).subscribe((res) => {
          beach.weatherData = res;
          console.log(beach);
          console.log(this.beaches.beachName);
        });
      });
    });
  }
}
