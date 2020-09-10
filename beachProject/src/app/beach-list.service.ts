import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeachListService {

  constructor(private http: HttpClient) { }

  getBeaches(data: any):Observable <any>{
    const beachParams = {
      key: "AIzaSyAYq4JeQPdEVRFfZMmorFcv4ABi_oAm7e0",
      query: data.query
    }

    const returnBeaches = this.http.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {params: beachParams});
    return returnBeaches;
  }
}
