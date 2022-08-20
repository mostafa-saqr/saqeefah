import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isMenuOpen = true;
  contentMargin = 240;
  constructor() { }

  ngOnInit(): void {
  }
  onToolbarMenuToggle() {
 
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 0 ;
     
      
    } else {
      this.contentMargin = 240;
  
     

    }
  }

}
