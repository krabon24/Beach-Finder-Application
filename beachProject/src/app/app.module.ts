import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from './google-map/google-map.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TravelNoticeComponent } from './travel-notice/travel-notice.component';
import { BeachesComponent } from './beaches/beaches.component';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { FavoriteBeachComponent } from './favorite-beach/favorite-beach.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,
    AboutComponent,
    GoogleMapComponent,
    SearchComponent,
    PageNotFoundComponent,
    TravelNoticeComponent,
    BeachesComponent,
    MapMarkerComponent,
    FavoriteBeachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
