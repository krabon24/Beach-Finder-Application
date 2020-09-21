import { Component, OnInit } from '@angular/core';
import { BeachListService } from '../beach-list.service';

@Component({
  selector: 'app-favorite-beach',
  templateUrl: './favorite-beach.component.html',
  styleUrls: ['./favorite-beach.component.css']
})
export class FavoriteBeachComponent implements OnInit {

  constructor(private beaches: BeachListService) { }

  ngOnInit(): void {
  }

  getFavoriteBeaches(favorites: any) { 
    console.log(this.beaches.favoriteBeaches);
    let uniqueBeaches = this.beaches.favoriteBeaches.filter((c, index) => {
      return this.beaches.favoriteBeaches.indexOf(c) === index;
  });
    return uniqueBeaches;
  }

}
