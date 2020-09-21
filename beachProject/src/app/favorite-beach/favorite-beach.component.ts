import { Component, OnInit } from '@angular/core';
import { BeachListService } from '../beach-list.service';

@Component({
  selector: 'app-favorite-beach',
  templateUrl: './favorite-beach.component.html',
  styleUrls: ['./favorite-beach.component.css']
})
export class FavoriteBeachComponent implements OnInit {
  favorite: any;

  constructor(private beaches: BeachListService) { }

  ngOnInit(): void {
  }

  getFavoriteBeaches() { 
    return this.beaches.favoriteBeaches;
  }

}
