import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from '../weather.service';
import { BeachListService } from '../beach-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter()

  constructor(
    private weather: WeatherService,
    private beaches: BeachListService
  ) {}

  ngOnInit(): void {}

  searchFormSubmitted(formData: any) {
    const BeachParms: any = {
      key: 'AIzaSyDD7HwmzWqfAPVxNACmt4Of17BVsbL3gjE',
      city: formData.city,
    };
    this.beaches.getBeaches(BeachParms).subscribe((data: any) => {
      this.beaches.beachName = data.results.filter((beach) =>
        beach.formatted_address.includes(formData.city)
      );
      let markers: any = [];
      this.search.emit();
      this.beaches.beachName.forEach((beach) => {
        this.weather
          .getMarineWeather(
            `${beach.geometry.location.lat},${beach.geometry.location.lng}`
          )
          .subscribe((res) => {
            beach.weatherInfo = res;

            let marker: any = {};
            marker.position = new google.maps.LatLng({
              lat: beach.geometry.location.lat,
              lng: beach.geometry.location.lng,
            });
            marker.info = {
              placeName: beach.name,
              address: beach.formatted_address,
              rating: beach.rating,
            };
            marker.animation = google.maps.Animation.DROP;
            marker.icon = "http://maps.google.com/mapfiles/ms/micons/blue-dot.png";
            markers.push(marker);
          });
      });
      this.beaches.markers = markers;
    });
  }
}
