import { Component, OnInit } from '@angular/core';
import { BeachListService } from "../beach-list.service";

@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css']
})
export class BeachesComponent implements OnInit {

  constructor(private beaches: BeachListService) { }

  ngOnInit(): void {
  }

  getBeaches(){ 
    return this.beaches.beachName;
  }

}
