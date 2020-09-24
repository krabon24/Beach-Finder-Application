import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { BeachListService } from '../beach-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop() { 
    document.documentElement.scrollTop = 0;
  }

}
