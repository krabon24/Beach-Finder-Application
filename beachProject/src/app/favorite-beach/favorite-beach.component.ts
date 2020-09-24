import { Component, OnInit } from '@angular/core';
import { BeachListService } from '../beach-list.service';

@Component({
  selector: 'app-favorite-beach',
  templateUrl: './favorite-beach.component.html',
  styleUrls: ['./favorite-beach.component.css']
})
export class FavoriteBeachComponent implements OnInit {
  favorite: any;
  showDetail: boolean;
  selectedBeach: any;

  constructor(private beaches: BeachListService) { }

  ngOnInit(): void {
  }

  getFavoriteBeaches() { 
    return this.beaches.favoriteBeaches;
  }

  removeFavoriteBeaches(beaches) {
    const itemIndex = this.beaches.favoriteBeaches.indexOf(beaches);
    this.beaches.favoriteBeaches.splice(itemIndex, 1);
  }

  displayDetail(beach: any) { 
    this.showDetail = true;
    this.selectedBeach = beach;
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
