import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TeamComponent } from "./team/team.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TravelNoticeComponent } from "./travel-notice/travel-notice.component";
import { AboutComponent } from "./about/about.component";
import { BeachesComponent } from "./beaches/beaches.component";
import { FavoriteBeachComponent } from "./favorite-beach/favorite-beach.component";


const Beachroutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: BeachesComponent},
  {path: 'about-lifes-a-beach', component: AboutComponent},
  {path: 'meet-the-team', component: TeamComponent},
  {path: 'covid19-travel-notice', component: TravelNoticeComponent},
  {path: 'favorites', component: FavoriteBeachComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'**', redirectTo:'/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(Beachroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
