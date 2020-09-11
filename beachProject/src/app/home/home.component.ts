import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { BeachListService } from '../beach-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // WeatherParams: object = {
  //   q: "Detroit",
  //   key: "fc1601812744410bbfb14416200309",
  //   days: 3
  // }

  // MarineParams: object = {
  //   key: "826ac9715aae4317b1204900200309",
  //   q: "34.03,118.87",
  //   format: "json",
  //   tide: "yes"
  // }

  // BeachParms: object = {
  //   key: "AIzaSyDD7HwmzWqfAPVxNACmt4Of17BVsbL3gjE",
  //   city: FormData.city
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
