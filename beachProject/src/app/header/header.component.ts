import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navbarOpen = false;
  thoughtForm = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onSearch() { 
    console.log();
  }

  onToggleThought() { 
    this.thoughtForm = !this.thoughtForm; 
  }

}
